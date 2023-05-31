import React from 'react';
import { BsSearch } from 'react-icons/bs'

const SearchBar = ({ textFilter, setTextFilter }) => {

    const handleInputChange = (e) => {
        setTextFilter(e.target.value)
    }

    return (
        <div className='search-bar'>
            <BsSearch 
            className="search-icon"
            />
            <input
                className="search-input"
                type="text"
                placeholder="Rechercher une note..."
                value={textFilter}
                onChange={handleInputChange}
            />   
        </div>
    );
};

export default SearchBar; 