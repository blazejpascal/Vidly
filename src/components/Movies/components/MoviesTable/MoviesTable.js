import React, {Component} from 'react';
import Heart from '../../../shared/Heart/Heart'
import TableHeader from '../../../shared/TableHeader/TableHeader'
import TableBody from '../../../shared/TableBody/TableBody'


class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title'},
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
            <table className="table table-dark">
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
                <TableBody data={movies} columns={this.columns}/>

            </table>
        );

    }
}

export default MoviesTable;