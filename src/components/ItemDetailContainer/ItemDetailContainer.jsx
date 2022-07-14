import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import '../ItemListContainer/estilosTitulo.css'

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
            .finally(() => setTimeout(() => {
                setEsperar(false)
            }, 2000))
    }, [])


    return (
        <>
        {
            esperar ?                          
            <div className="estilosFondoBody">
                <div className="estilosCargando">
                    <h4 style={{color: 'white'}}>Cargando ... </h4>
                    <img src="https://i.pinimg.com/originals/27/73/4d/27734d6d3a94944fc6145e40cc06dfc3.jpg" alt='cargando'/>
                </div>
            </div> 
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