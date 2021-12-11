import React from 'react'
import Header from '../header/Header'
import Buttons from './components/buttons/Buttons'
import ListProducts from './components/list/ListProducts'
import './ListScreen.css'

function ListScreen() {
    return (
        <div className='list_screen'>
            <Header className="listScreen__header"/>
            <div className='listScreen__list'>                 
                <Buttons/>
                <ListProducts/>
            </div>
        </div>
    )
}

export default ListScreen
