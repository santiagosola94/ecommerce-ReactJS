import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [detail, setDetails] = useState([])
    const [esperar, setEsperar] = useState(true)
    
    const { id } = useParams()

    
    useEffect(() => {
        const db = getFirestore()
        const manejar = doc(db, 'productos', id)
        getDoc(manejar)
            .then(resp => setDetails({id: resp.id, ...resp.data()}))
            .catch(err => console.error(err))
            .finally(() => setEsperar(false))
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