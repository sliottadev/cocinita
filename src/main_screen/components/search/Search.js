import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Search.css' 

function Search() {
    return (
        <div className="search">
            <SearchIcon />
            <input className="search__input" placeholder="Search..." type="text"/>
            <ArrowDropDownIcon className="headerinputCaret"/>
        </div>
    )
}

export default Search
