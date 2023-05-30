import React from 'react';
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {

    return (
        <div className='search-bar'>
            <BsSearch 
            className="search-icon"
            />
            <input
                className="search-input"
                type="text"
                placeholder="Rechercher une note..."
            />   
        </div>
    );
};

export default SearchBar; 