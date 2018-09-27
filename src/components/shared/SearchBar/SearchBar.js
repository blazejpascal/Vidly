import React from 'react';

const SearchBar = ({value, onChange}) => {
    return (
        <input className="form-control my-3"
               type="search"
               onChange={e => onChange(e.currentTarget.value)}
               value={value}
               placeholder="Search..."
        />
    );
};

export default SearchBar;
