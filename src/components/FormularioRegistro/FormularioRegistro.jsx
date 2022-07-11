import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import './formularioRegistro.css'

export const FormularioRegistro = () => {
    const [provincias, setProvincias] = useState([])
    const [localidades, setLocalidades] = useState([])
    const [cuentaCreada, setCuentaCreada] = useState('')

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
        .then(()=> setCuentaCreada(true))
    }
    


    return (
        <>
            <div>
                <div className="formularioContenedor">
                    {cuentaCreada ? <h4>La cuenta ha sido creada con Exito. Por favor, ingrese con su usuario y contraseña!</h4>
                    : 
                    
                    <div>
                        <h3>Datos Personales</h3>
                        <form className="formularioEstilos" onSubmit={registrar}>
                            <label htmlFor="nombreUsuario">Nombre de Usuario</label>
                            <input type="text" id="nombreUsuario" name="nombreDeUsuario" required onChange={onChangeHandler} defaultValue={formulario.nombreDeUsuario}/>
                            
                            <label htmlFor="contrasena">Contraseña</label>
                            <input type="password" id="contrasena" name="contrasena" required onChange={onChangeHandler} defaultValue={formulario.contrasena}/>
                            
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" required onChange={onChangeHandler} defaultValue={formulario.nombre}/>
                        
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id="nombre" name="apellido" required onChange={onChangeHandler} defaultValue={formulario.apellido}/>
                        
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" id="email" name="email" required onChange={onChangeHandler} defaultValue={formulario.email}/>
                        
                            <label htmlFor="dni">DNI</label>
                            <input type="number" name="dni" id="dni" required onChange={onChangeHandler} defaultValue={formulario.dni} />
                            <label htmlFor="provincia">Provincia</label>
                                <select name="provincia" required defaultValue={formulario.provinciaElegida} onChange={onChangeHandler}>
                                    <option value="vacio">-</option>
                                    {provincias.map(item =>
                                        <option key={item.id} value={item.nombre}>{item.nombre}</option>
                                    )}
                                </select>
                        
                            <label htmlFor="localidad">Localidad</label>
                                <select name="localidad" required defaultValue={formulario.localidadElegida} onChange={onChangeHandler}>
                                    {localidades.filter((localidadesDeLaProvincia)=>{
                                        return localidadesDeLaProvincia.provincia.nombre === formulario.provincia
                                    }).sort().map(item =>
                                        <option key={item.id} value={item.nombre}>{item.nombre}</option>)}
                                </select>
                            <label htmlFor="direccion">Direccion</label>
                            <input type="text" required name="direccion" id="direccion"
                                onChange={onChangeHandler}
                                defaultValue={formulario.direccion}/>
                            <input type="submit" value="Enviar"></input>
                        </form>
                    </div>
                    }

                </div>
            </div>
        </>
    )
}
