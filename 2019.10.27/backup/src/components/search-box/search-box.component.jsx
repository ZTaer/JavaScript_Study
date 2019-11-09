import React from 'react';
import './search-box.styles.css';

export const SearchBox = ( { placeholder, searchChangeEvent } ) => {
    return (
        <input className='search' type='search' placeholder={ placeholder } onChange={ searchChangeEvent }  />
    );
}