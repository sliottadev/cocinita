import React from 'react'
import Header from '../header/Header'
import Search from './components/search/Search'
import Carde from './components/card/Carde'
import './MainScreen.css'

function MainScreen() {
    return (
        <div>
            <Header className="mainScreen__header"/>
            <Search />
            <div className="mainScreen__cardContainer">
                <Carde />
                <Carde />
                <Carde />
                <Carde />
            </div>

        </div>
    )
}

export default MainScreen
