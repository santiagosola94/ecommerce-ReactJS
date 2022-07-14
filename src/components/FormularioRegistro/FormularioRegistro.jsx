import { faKey, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './formularioRegistro.css'

export const FormularioRegistro = () => {
    const [provincias, setProvincias] = useState([])
    const [localidades, setLocalidades] = useState([])
    const [cuentaCreada, setCuentaCreada] = useState(true)
    const [mensajeError, setMensajeError] = useState('')

    const [formulario, setFormulario] = useState({})

    const crearNuevaCuenta = async ()=> {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, formulario.email, formulario.contrasena)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('El usuario ha sido creado correctamente', user)
            setCuentaCreada(true)
            const formularioConID = {...formulario, uid: user.uid }
            const db = getFirestore()
            const crearUsuario = collection(db, 'users')
            addDoc(crearUsuario, formularioConID)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setCuentaCreada(false)
            setMensajeError(errorCode)
        });
    }

    const manejadorError = ()=>{
        if (mensajeError == "auth/weak-password") {
            return "La contraseña es debil, debes ingresar mas de 6 caracteres"
        }
        if (mensajeError == "auth/email-already-in-use") {
            return "El Correo ya esta en uso. Ya tienes una cuenta con ese email"
        }
        else{
            return mensajeError
        }
    }

    const onChangeHandler = (e)=>{
        setFormulario({...formulario, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        fetch('./provincias/provincias.json')
            .then(resp => resp.json())
            .then(data => setProvincias(data.provincias.sort(((a, b) => {
                if (a.nombre === b.nombre) {
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
                if (a.nombre === b.nombre) {
                    return 0;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                return 1;
                }))))
            .finally(()=>console.log('localidades cargadas'))
        },[])


    const registrar = async (e) => {
        e.preventDefault()
        crearNuevaCuenta()
    }
    
    

    return (
        <>
            <div className="estilosFondo">
                <div className="formularioContenedor">
                    {cuentaCreada 
                    ?   <div className="fondoCuentaCreada">
                            <h4>La cuenta ha sido creada con Exito. Por favor, ingrese con su usuario y contraseña!</h4>
                            <Link to="/">
                                    <button className="btn btn-danger alMedio marginBoton">Ir a Inicio</button>
                            </Link>
                        </div>
                    : 
                        <>
                            <div className="divFlexContenedor">
                                <div className="imagenForm"></div>
                                <form className="formularioEstilos" onSubmit={registrar}>
                                    <h3 className="tituloFormulario">SportSide - Indumentaria Deportiva</h3>
                                    <p>Para registrarte en nuestra pagina, te vamos a pedir que ingreses un email. Este mail te va a servir para luego poder realizar el Log In! </p>
                                    <div className="test">
                                        <label htmlFor="email" className="formularioEstilosItems">E-Mail</label>
                                        <input type="email" id="email" name="email" required onChange={onChangeHandler} defaultValue={formulario.email}/>
                                    </div>
                                    <div className="test">
                                        <label htmlFor="nombreUsuario" className="formularioEstilosItems">Nombre de Usuario</label>
                                        <input className="testInput" type="text" id="nombreUsuario" name="nombreDeUsuario" required onChange={onChangeHandler} defaultValue={formulario.nombreDeUsuario}/>
                                    </div>
                                
                                    <div className="test">
                                        <label htmlFor="contrasena" className="formularioEstilosItems">Contraseña</label>
                                        <input type="password" id="contrasena" name="contrasena" required onChange={onChangeHandler} defaultValue={formulario.contrasena}/>
                                    </div>
                                
                                    <div className="test">
                                        <label htmlFor="nombre" className="formularioEstilosItems">Nombre</label>
                                        <input type="text" id="nombre" name="nombre" required onChange={onChangeHandler} defaultValue={formulario.nombre}/>
                                    </div>
                                    <div className="test">
                                        <label htmlFor="apellido" className="formularioEstilosItems">Apellido</label>
                                        <input type="text" id="apellido" name="apellido" required onChange={onChangeHandler} defaultValue={formulario.apellido}/>
                                    </div>
                                    <div className="test">
                                        <label htmlFor="dni" className="formularioEstilosItems">DNI</label>
                                        <input type="number" name="dni" id="dni" required onChange={onChangeHandler} defaultValue={formulario.dni} />
                                    </div>
                                    <div className="test">
                                        <label htmlFor="provincia" className="formularioEstilosItems">Provincia</label>
                                            <select name="provincia" required defaultValue={formulario.provinciaElegida} onChange={onChangeHandler}>
                                                <option value="vacio">-</option>
                                                {provincias.map(item =>
                                                    <option key={item.id} value={item.nombre}>{item.nombre}</option>
                                                )}
                                            </select>
                                    </div>
                                
                                    <div className="test">
                                        <label htmlFor="localidad" className="formularioEstilosItems">Localidad</label>
                                            <select name="localidad" required defaultValue={formulario.localidadElegida} onChange={onChangeHandler}>
                                                {localidades.filter((localidadesDeLaProvincia)=>{
                                                    return localidadesDeLaProvincia.provincia.nombre === formulario.provincia
                                                }).sort().map(item =>
                                                    <option key={item.id} value={item.nombre}>{item.nombre}</option>)}
                                            </select>
                                    </div>
                                    <div className="test">
                                        <label htmlFor="direccion" className="formularioEstilosItems">Direccion</label>
                                        <input type="text" required name="direccion" id="direccion"
                                            onChange={onChangeHandler}
                                            defaultValue={formulario.direccion}/>
                                    </div>
                                    {mensajeError && 
                                    <div className="divAlerta">
                                        <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: 'yellow'}}/>
                                        <p style={{margin: '0px'}}>Error: {manejadorError()}</p>
                                    </div>}
                                    <input className="btn btn-primary" type="submit" value="Registrar"></input>
                                </form>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}
