import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import './loginWidget.css'

import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, getFirestore, query, where, doc } from 'firebase/firestore'

const LoginWidget = () => {
    const [loginClick, setLoginClick] = useState(false)
    
    const [usuarioIngresado, setUsuarioIngresado] = useState([])
    const [errorLogIn, setErrorLogIn] = useState(false)

    const [usuarioValidado, setUsuarioValidado] = useState('')
    const [usuarioLoggeado, setUsuarioLoggeado] = useState([])
    
    function mostrarLogin() {
        if (loginClick) {
            setLoginClick(false)
        } else {
            setLoginClick(true)
        }
    }

    function cerrarLogin() {
        setLoginClick(false)
    }

    const onChangeManejador = (e) => {
        setUsuarioIngresado({ ...usuarioIngresado, [e.target.name]: e.target.value })
        console.log(usuarioIngresado.usuario)
    }

    function buscarUsuario (e) {
        e.preventDefault()
        const db = getFirestore()

        async function usuarioEncontrado() {
            const buscarColeccion = collection(db, 'users')
            const traerColeccion = query(buscarColeccion, where('nombreDeUsuario', '==', usuarioIngresado.usuario))
            await getDocs(traerColeccion)
            .then(resp => resp.docs.forEach((doc) => {
                setUsuarioLoggeado({...doc.data(), id: doc.id})
            }))
            .finally(
                validarContrasena()
            )

        }

        const validarContrasena = () =>{
            setTimeout(() =>{
                if (usuarioLoggeado.contrasena === usuarioIngresado.password) {
                    console.log('ha sido true')
                    console.log(usuarioLoggeado.contrasena === usuarioIngresado.password)
    
                    setUsuarioValidado(true)
                    setLoginClick(false)
                    setErrorLogIn(false)
    
                } else {
                    console.log('Ha fallado')
                    console.log(usuarioLoggeado.contrasena === usuarioIngresado.password)
                    setErrorLogIn(true)
                    setUsuarioLoggeado([])
    
                }
            }, 10)
        }

        usuarioEncontrado()


        //const buscarColeccion = doc(db, 'users', 'IMrA4laGe36feXBpFM6Q')
        //const traerColeccion = query(buscarColeccion, where('nombreDeUsuario', '==', usuarioIngresado.usuario ))
        //await getDoc(buscarColeccion)
        //.then(resp => console.log(resp.data()))
    }

    const logOut = () => {
        setUsuarioValidado(false)
        setUsuarioLoggeado([])
    }
    

    return (
        <div className="estilosDivLogin">
                {usuarioValidado ? <div>Loggeado como: {usuarioLoggeado.nombreDeUsuario}</div> : ''}
                {usuarioValidado 
                    ? 
                        <div>
                                <FontAwesomeIcon icon={faRightFromBracket} size='lg' inverse onClick={logOut} className="iconoLogIn"/>
                                <p className="estilosTextoLogin">Salir</p>
                        </div>
                    :
                        <div>
                            <FontAwesomeIcon icon={faUser} size='lg' inverse onClick={mostrarLogin} className="iconoLogIn"/>
                            <p className="estilosTextoLogin">Login</p>
                        </div>
                }
                {loginClick ? 
                        <div className="contenedorLogin" /*onMouseLeave={cerrarLogin} */>
                            <FontAwesomeIcon icon={faX} size='lg' onClick={cerrarLogin} className='icono'/> 

                            <h3>Log In</h3>
                            <form className="estilosFormulario" onSubmit={buscarUsuario}>
                                <label htmlFor="usuario">Usuario</label>
                                <input type="text" id='usuario' name="usuario" required defaultValue={usuarioIngresado.usuario} onChange={onChangeManejador}/>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id='password' name="password" required defaultValue={usuarioIngresado.password} onChange={onChangeManejador}/>
                                {errorLogIn ? <label htmlFor="botonLogIn">Has ingresado un usuario o contraseña incorrecto</label> : ''}
                                <button type="submit" id="botonLogIn" style={{margin: '10px 0px'}}>Log In</button> 
                            </form>
                            <p style={{color: 'white'}}>No tenes una cuenta? </p>
                            <Link onClick={cerrarLogin} to="/registro">Registrate</Link>
                        </div> 
                    : ''}
        </div>
    )
}

export default LoginWidget