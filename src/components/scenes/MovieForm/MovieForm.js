import React  from 'react';
import Form from '../../shared/Form/Form'

import Joi from 'joi-browser'
import {getGenres} from "../../../services/fakeGenreService"
import {getMovies, saveMovie} from "../../../services/fakeMovieService"


class MyComponent extends Form {
    state = {
        data: {title: '', genreID: '', numberInStock: '', dailyRentalRate: ''},
        errors: {},
        genres: [],
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().label('Title').required(),
        genreId: Joi.string().label('Genre').required(),
        numberInStock: Joi.number().integer().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().integer().min(0).max(10).label('Daily Rental Rate'),
    }

    componentDidMount() {

        this.setState({genres: getGenres()});

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovies(movieId);
        if (!movie) return this.props.history.replace('/not-found')

        this.setState({data: this.mapToViewModel(movie)})


    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            memberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies")

    }




    render() {
        return (
            <div>
                <h1>
                    New Movie
                </h1>
                <form onSubmit={this.handleSubmit} >
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', "Genre", this.state.genres)}

                    {this.renderInput('numberInStock', 'Number in Stock')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>



            </div>

        );
    }
}


export default MyComponent;
