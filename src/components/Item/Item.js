import React from 'react'
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Item({producto}) {
    const {nombre, img, descripcion, stock, precio,id} = producto;


return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                        {descripcion}.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Stock Disponible: {stock}</ListGroupItem>
                        <ListGroupItem>Precio: ${precio}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Link to={`/detalles/${id}`}>
                            <Button>Ver Detalles</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Item