import React from 'react';

import './search-bar.styles.css';

export const SearchBar = ({ placeholder, handleChange }) => {

    return (
        <div>
            <input className="search-bar-container"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )

}