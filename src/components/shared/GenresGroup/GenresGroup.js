import React from 'react';

const GenresGroup = (props) => {
    const {genres, onGenreSelect, selectedGenre, textProperty, valueProperty} = props
    return (
        <ul className="list-group">
            {
                genres.map((genre) => (
                    <li
                        key={genre[valueProperty]}
                        onClick={() => onGenreSelect(genre)}
                        className={selectedGenre === genre ? 'list-group-item active' : 'list-group-item'}>
                        {genre[textProperty]}
                    </li>
                ))
            }

        </ul>
    );
};

GenresGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default GenresGroup;
