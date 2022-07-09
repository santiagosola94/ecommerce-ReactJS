import React from 'react'
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './estilosCard.css'

function Item({producto}) {
    const {nombre, img, descripcion, stock, precio,id} = producto;


return (
            <>
                <Card className="estilosCard">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="estiloCardBody">
                        <Card.Title>{nombre.toUpperCase()}</Card.Title>
                        <Card.Text>
                        {descripcion}.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className='estiloGrupoCard'>Stock Disponible: {stock}</ListGroupItem>
                        <ListGroupItem className='estiloGrupoCard'>Precio: ${precio}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Link to={`/detalles/${id}`}>
                            <Button variant="danger">Ver Detalles</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Item