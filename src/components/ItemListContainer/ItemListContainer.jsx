import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import './estilosTitulo.css'

import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where, orderBy} from 'firebase/firestore'


function ItemListContainer(prop) {
    const [productos, setProductos]= useState([]);
    const [cargando, setCargando] = useState(true);
    const { categoria } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'productos')
        const queryCollectionOrdenado = query(queryCollection, orderBy('descripcion', 'asc'))

        
        if (categoria) {
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoria))
            getDocs(queryCollectionFilter)
                .then(resp => setProductos(resp.docs.map((item)=>(
                    {id: item.id, ...item.data()})
                )))
                .catch(err => {console.log(err)})
                .finally(setCargando(false))
        } else {
            getDocs(queryCollectionOrdenado)
                .then(resp => setProductos(resp.docs.map((item)=>(
                    {id: item.id, ...item.data()})
                )))
                .catch(err => {console.log(err)})
                .finally(setTimeout(() => {
                    setCargando(false)
                }, 3000))
        }
        return () =>{
            setCargando(true)
        }

    }, [categoria])
    
    

    const {greeting} = prop

    return (
        <>
            <div className="estilosFondoBody">
                <h1 className="estilosTitulo">{greeting}</h1>
                    {cargando ? (
                        <div className="estilosCargando">
                            <h4>Cargando ... </h4>
                            <img src="https://i.pinimg.com/originals/27/73/4d/27734d6d3a94944fc6145e40cc06dfc3.jpg" alt='cargando'/>
                        </div>
                    ) : (
                        <ItemList productos={ productos } />
                    )}
            </div>
        </>
    )
}

export default ItemListContainer