import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({detallesDelProducto}) => {
    const {detalles, precio, img, stock, nombre, descripcion} = detallesDelProducto

    return (
        <Container className="estilosContainer">
            <Row className="estilosItemDetail">
                <Col>
                    <img src={img} />
                </Col>
                <Col>
                    <h4 className="alMedio">{nombre}</h4>
                    <p>
                        {detalles}
                    </p>
                    <h5 className="alMedio">Precio: ${precio}</h5>
                    <h5 className="alMedio">Stock Disponible: {stock}</h5>

                    <div>
                        <ItemCount stock={stock} valorInicial='1' nombreDelProducto={nombre}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail