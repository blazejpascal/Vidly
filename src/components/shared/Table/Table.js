import React from 'react';
import TableHeader from '../TableHeader/TableHeader'
import TableBody from '../TableBody/TableBody'


const Table = ({columns, sortColumn, onSort, data}) => {
    return (
        <table className="table table-dark">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody data={data} columns={columns}/>

        </table>
    );
};

export default Table;
