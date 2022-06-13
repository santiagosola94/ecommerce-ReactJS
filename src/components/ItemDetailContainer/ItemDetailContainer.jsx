import React, { useEffect, useState } from 'react'
import FetchDetallesProductos from '../../helpers/detalleProductos'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [detail, setDetails] = useState([])
    const [esperar, setEsperar] = useState(true)

    useEffect(() => {
        FetchDetallesProductos
        .then((resp) =>{
            setDetails(resp)
        })
        .catch((err) => console.log(err))
        .finally(()=>{
            setEsperar(false)
        })
    }, [])

    return (
        <>
        {
            esperar ? ( <h1> Cargando Descripcion ...</h1>) 
            : ( <div>
                    {detail.map((detallesDelProducto) => (
                        <ItemDetail key={detallesDelProducto.id} detallesDelProducto={detallesDelProducto} />
                    ))}
                </div>
            )
        }
        </>
    )
}

export default ItemDetailContainer