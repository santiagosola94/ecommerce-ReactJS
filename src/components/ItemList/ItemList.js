import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import getFetch from '../../helpers/getFetch'
import Item from '../Item/Item'



function ItemList() {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    
    useEffect(() => {
        getFetch.then((resp) => {
            setProducto(resp)
        })
        .catch((resp) => {
            console.log(resp)
        })
        .finally(()=> {
            setCargando(false)
            console.log('Productos Cargados')
        })
        
    }, [])


    return (
        <div>
            { 
            cargando 
            ? 
                <>
                <h4>Cargando... </h4>
                <img src='https://i.pinimg.com/originals/27/73/4d/27734d6d3a94944fc6145e40cc06dfc3.jpg' />
                </>
            :
            <Row className="justify-content-md-center">
                { producto.map(productos => 
                    <Item   key={productos.id} 
                            nombre={productos.nombre} 
                            img={productos.img} 
                            descripcion={productos.descripcion}
                            stock={productos.stock}
                            precio={productos.precio} /> 
                )}
            </Row>
            
            }
        </div>
    )
}

export default ItemList
