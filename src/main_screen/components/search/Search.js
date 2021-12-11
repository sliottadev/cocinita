import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating';
import './Search.css' 

function Search() {
    return (
        <div className="search">
            <SearchIcon />
            <input className="search__input" placeholder="Search..." type="text"/>
            <DropdownButton className="search__filter" id="dropdown-basic-button" title="">
                <Dropdown.Item disabled> &emsp;&emsp;Dificultad </Dropdown.Item>
                <Dropdown.Item href="#/action-1"> <RatingView ratingValue={1} size={25}/> </Dropdown.Item>
                <Dropdown.Item href="#/action-2"> <RatingView ratingValue={2} size={25}/> </Dropdown.Item>
                <Dropdown.Item href="#/action-3"> <RatingView ratingValue={3} size={25}/> </Dropdown.Item>
                <Dropdown.Item href="#/action-4"> <RatingView ratingValue={4} size={25}/> </Dropdown.Item>
                <Dropdown.Item href="#/action-5"> <RatingView ratingValue={5} size={25}/> </Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Search
