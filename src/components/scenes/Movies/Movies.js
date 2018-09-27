import React, {Component} from 'react'
import _ from 'lodash'


import Pagination from '../../shared/Pagination/Pagination'
import GenresGroup from '../../shared/GenresGroup/GenresGroup'
import MovieTable from './components/MoviesTable/MoviesTable'

import {getMovies} from '../../../services/fakeMovieService'
import {getGenres} from '../../../services/fakeGenreService'
import {paginate} from '../../../utils/paginate'
import './Movies.css'

import {Link} from 'react-router-dom'
import SearchBar from "../../shared/SearchBar/SearchBar";


class Movies extends Component {

    constructor() {
        super()
        this.state = {
            moviesArray: [],
            genres: [],
            pageSize: 4,
            currentPage: 1,
            sortColumn: {path: 'title', order: 'asc'},
            searchQuery: "",
            selectedGenre: null

        }
    }

    componentDidMount() {
        let movies = getMovies()
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()]
        this.setState({
            moviesArray: movies,
            genres
        })
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleDelete = (movie) => {
        // console.log('movie', movie)
        const updatedMovies = this.state.moviesArray.filter((oldMovies) => oldMovies.title !== movie.title)
        this.setState({
            moviesArray: updatedMovies
        })
    }

    handleLike = (movie) => {
        const movies = [...this.state.moviesArray]
        const index = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked
        this.setState({
            moviesArray: movies,
        })
    }

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            searchQuery: "",
            currentPage: 1
        })
    }

    handleSearch = (query) => {
        this.setState({
            searchQuery: query, selectedGenre: null, currentPage: 1
        })
    }


    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        })
    }

    getPageData = () => {

        const {
            pageSize,
            currentPage,
            selectedGenre,
            sortColumn,
            moviesArray,
            searchQuery
        } = this.state

        let filtered = moviesArray;
        if(searchQuery)
            filtered = moviesArray.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        else if (selectedGenre && selectedGenre._id)
            filtered = moviesArray.filter(m => m.genre._id === selectedGenre._id)


        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize)
        return {totalCount: filtered.length, data: movies}
    }

    render() {
        let {length: counter} = this.state.moviesArray
        const {
            pageSize,
            currentPage,
            sortColumn,
            searchQuery,
        } = this.state

        const {totalCount, data} = this.getPageData()

        return <div className='movies'>
            {
                (!counter) ?
                    <h1> Add some movies</h1>
                    :
                    <div className="row">
                        <div className='col-4 genres-group'>
                            <GenresGroup genres={this.state.genres}
                                         selectedGenre={this.state.selectedGenre}
                                         onGenreSelect={this.handleGenreSelect}
                            />
                        </div>
                        <div className="col-8">
                            <Link to="/movies/new" className="btn btn-primary" style={{marginBottom: 20}} > New Movie </Link>
                            <h1> Showing {totalCount} movies in database </h1>
                            <SearchBar  value={searchQuery} onChange={this.handleSearch} />
                            <MovieTable movies={data}
                                        sortColumn={sortColumn}
                                        onLike={this.handleLike}
                                        onDelete={this.handleDelete}
                                        onSort={this.handleSort}
                            />
                            <Pagination itemsCount={totalCount}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                            />
                        </div>
                    </div>
            }
        </div>
    }
}

export default Movies