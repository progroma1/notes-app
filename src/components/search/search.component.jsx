import React, { useRef } from 'react';



const Search = (props) => {
const inputEl = useRef("");
const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
}

    return (
        <div className="app-search">
            <input className="search-input" 
            placeholder='Пошук' 
            type="text" 
            value={props.term}
            onChange={getSearchTerm}
            ref={inputEl}
            />
        </div>
    );
}

export default Search;