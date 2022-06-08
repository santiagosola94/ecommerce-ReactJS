import React from 'react'
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';


function Item({nombre, img, descripcion, stock, precio}) {
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
                        <Button variant="danger">Agregar Al Carrito</Button>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Item