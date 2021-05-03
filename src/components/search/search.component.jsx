import React from 'react';

const Search = ({ setSearchResults }) => {
    return (
        <div className="app-search">
            <input className="search-input" 
            placeholder='Пошук' 
            type="text"
            onChange={ (event) => setSearchResults(event.target.value)}
            />
        </div>
    )
};

export default Search;