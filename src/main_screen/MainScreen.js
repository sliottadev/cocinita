import React from 'react'
import Header from '../header/Header'
import Search from './components/search/Search'
import Card from './components/card/Card'

function MainScreen() {
    return (
        <div>
            <Header className="mainScreen__header"/>
            <Search />
            <div>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default MainScreen
