import React from 'react'
import './Carde.css'
import {Card, Row, Col}  from 'react-bootstrap'
import StarIcon from '@material-ui/icons/Star'

function Carde() {
    return (
        <Card className="carde__card">
        <Card.Body>
            <div>
                <Row>
                    <Col xs={7}>
                        <Card.Title>Bifecitos a la Portuguesa</Card.Title>                        
                    </Col>
                    <Col xs={5}>
                       <StarIcon/>   
                       <StarIcon/>
                       <StarIcon/>
                       <StarIcon/>
                       <StarIcon/>
                    </Col>
                </Row>
                <Row>
                    <Card.Img variant="top" src="https://www.targethost.com.br/site/wp-content/uploads/2019/03/homem-negro-programando-computador.jpg" />
                </Row>                
            </div>
        </Card.Body>
        </Card>        
        // <Card className="carde__card">
        // <Card.Body>
        //     <div>
        //         <Row>
        //             <Col xs={4}>
        //                 <Card.Img variant="top" src="https://www.targethost.com.br/site/wp-content/uploads/2019/03/homem-negro-programando-computador.jpg" />
        //             </Col>
        //             <Col xs={8}>
        //                 <Card.Title>Bifecitos a la Portuguesa</Card.Title>
        //             </Col>
        //         </Row>
        //     </div>
        // </Card.Body>
        // </Card>
    )
}

export default Carde
