import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import './estilosTitulo.css'
import getFetch from "../../helpers/getFetch"
import { useParams } from 'react-router-dom'


function ItemListContainer(prop) {
    const [productos, setProductos]= useState([]);
    const [cargando, setCargando] = useState(true);
    const { categoria } = useParams()


    useEffect(() =>{
        getFetch(categoria)
            .then((resp)=>{
                setProductos(resp);
        })
            .catch((err)=>console.log(err))
            .finally(()=> {
                setCargando(false)
            });
        return () => {
            setCargando(true)
        }
    }, [categoria])

    const {greeting} = prop

    return (
        <>
            <div className="estilosTitulo">
                <h1>{greeting}</h1>
                    {cargando ? (
                        <>
                            <h4>Cargando ... </h4>
                            <img src="https://i.pinimg.com/originals/27/73/4d/27734d6d3a94944fc6145e40cc06dfc3.jpg" alt='cargando'/>
                        </>
                    ) : (
                        <ItemList productos={ productos } />
                    )}
            </div>
        </>
    )
}

export default ItemListContainer