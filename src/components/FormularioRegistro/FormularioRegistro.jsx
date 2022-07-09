import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import './formularioRegistro.css'

export const FormularioRegistro = () => {
    const [provincias, setProvincias] = useState([])
    const [localidades, setLocalidades] = useState([])


    const [formulario, setFormulario] = useState({})


    const onChangeHandler = (e)=>{
        setFormulario({...formulario, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        fetch('./provincias/provincias.json')
            .then(resp => resp.json())
            .then(data => setProvincias(data.provincias.sort(((a, b) => {
                if (a.nombre == b.nombre) {
                    return 0;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                return 1;
            }))))
            .finally(() =>console.log('provincias cargadas'))
            
        fetch('./localidades/localidadesActualizado.json')
            .then(resp => resp.json())
            .then(data => setLocalidades(data.localidades.sort(((a, b) => {
                if (a.nombre == b.nombre) {
                    return 0;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                return 1;
                }))))
            .finally(()=>console.log('localidades cargadas'))
        },[])


    const registrar = (e) => {
        e.preventDefault()

        const db = getFirestore()
        const crearUsuario = collection(db, 'users')
        addDoc(crearUsuario, formulario)

    }
    


    return (
        <>
            <div>
                <div className="formularioContenedor">
                    <form className="formularioEstilos">
                        <h3>Datos Personales</h3>

                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" onChange={onChangeHandler} defaultValue={formulario.nombre}/>
                        
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id="nombre" name="apellido" onChange={onChangeHandler} defaultValue={formulario.apellido}/>
                        
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" name="email" onChange={onChangeHandler} defaultValue={formulario.email}/>
                        

                        <label htmlFor="dni">DNI</label>
                        <input type="text" name="dni" id="dni" onChange={onChangeHandler} defaultValue={formulario.dni} />


                        <label htmlFor="provincia">Provincia</label>
                            <select name="provincia" defaultValue={formulario.provinciaElegida} onChange={onChangeHandler}>
                                <option value="vacio">-</option>
                                {provincias.map(item => 
                                    <option key={item.id} value={item.nombre}>{item.nombre}</option>
                                )}
                            </select>
                        
                        <label htmlFor="localidad">Localidad</label>
                            <select name="localidad" defaultValue={formulario.localidadElegida} onChange={onChangeHandler}>
                                {localidades.filter((localidadesDeLaProvincia)=>{
                                    return localidadesDeLaProvincia.provincia.nombre === formulario.provincia
                                }).sort().map(item => 
                                    <option key={item.id} value={item.nombre}>{item.nombre}</option>)}
                            </select>

                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" name="direccion" id="direccion" 
                            onChange={onChangeHandler} 
                            defaultValue={formulario.direccion}/>

                        <input type="button" value="Enviar" onClick={registrar}></input>
                    </form>
                </div>
            </div>
        </>
    )
}
