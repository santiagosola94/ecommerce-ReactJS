import React, { useEffect, useState } from 'react'
import FetchDetallesProductos from '../../helpers/detalleProductos'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [detail, setDetails] = useState([])
    const [esperar, setEsperar] = useState(true)
    
    /* Esta constante ID la hice para que declare un numero aleatorio y me lo muestre despues en pantalla*/
    const id = Math.floor(Math.random() * 2)+1

    useEffect(() => {
        FetchDetallesProductos(id)
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
                    {
                        <ItemDetail key={detail.id} detallesDelProducto={detail} />
                    }
                </div>
            )
        }
        </>
    )
}

export default ItemDetailContainer