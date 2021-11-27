import './Carde.css'
import React from 'react'
import {Card, Row, Col}  from 'react-bootstrap'
import { RatingView } from 'react-simple-star-rating'

function Carde() {
    return (
        <Card className="carde__card">
        <Card.Body>
            <div>
                <Row>
                    <Col xs={7}>
                        <Card.Title >Bifecitos a la Portuguesa</Card.Title>                        
                    </Col>
                    <Col xs={5}>
                        <RatingView ratingValue={2} size={23}/* RatingView Props */ />
                    </Col>
                </Row>
                <Row>
                    <Card.Img variant="top" src="https://www.fiadown.org/wp-content/uploads/2018/07/20180302-FIADOWN-Las-redes-sociales-se-vuelcan-con-el-brasile%C3%B1o-Matheus-Gabrieli-para-dar-a-conocer-su-negocio.jpeg" />
                </Row>                
            </div>
        </Card.Body>
        </Card>        
    )
}

export default Carde
