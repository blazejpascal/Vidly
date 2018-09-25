import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Heart from '../../../../shared/Heart/Heart'
import Table from '../../../../shared/Table/Table'

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', content: movie => <Heart liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
        {
            key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)}
                                            className=" btn btn-danger btn-sm">
                Delete
            </button>
        },

    ]

    render() {
        const {movies, sortColumn, onSort} = this.props
        return (
            <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        );

    }
}

export default MoviesTable;