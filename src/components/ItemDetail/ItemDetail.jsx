import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'



const ItemDetail = ({detallesDelProducto}) => {
    const {detalles, precio, img, stock, nombre} = detallesDelProducto

    const {addToCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState()


    const onAdd = (cant) => {
        const precioTotal = detallesDelProducto.precio * cant
        addToCart({...detallesDelProducto, cantidad:cant, precioTotal: precioTotal})
        setCantidad(cant)
    }



    return (
        <div className="estilosContainer">
            <Row className="estilosItemDetail">
                <Col>
                    <img src={img} alt={nombre} className="imagenes"/>
                </Col>
                <Col>
                    <h4 className="alMedio">{nombre}</h4>
                    <p>
                        {detalles}
                    </p>
                    <h5 className="alMedio">Precio: ${precio}</h5>
                    {stock === 0 ? <h5 className="alMedio">No hay stock disponible</h5> : <h5 className="alMedio">Stock Disponible: {stock}</h5> }

                    <div>
                        { cantidad ?
                            <div className="flexBotonesCart">
                                <Link to="/">
                                    <button className="btn btn-outline-danger alMedio">Seguir Comprando</button>
                                </Link>
                                <Link to="/carrito">
                                    <button className="btn btn-outline-danger alMedio">Ir al cart</button>
                                </Link>
                            </div>
                            :    
                                <ItemCount stock={stock} valorInicial='1' nombreDelProducto={nombre} onAdd={onAdd}/>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetail