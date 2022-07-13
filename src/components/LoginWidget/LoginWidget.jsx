import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faX, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import './loginWidget.css'

import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const LoginWidget = () => {
    const [loginClick, setLoginClick] = useState(false)
    const [usuarioIngresado, setUsuarioIngresado] = useState([])

    const [usuarioLoggeado, setUsuarioLoggeado] = useState(false)
    const [nombreUsuarioConectado, setNombreUsuarioConectado ] = useState('')

    const [errorLogin, setErrorLogin] = useState('')


    
    function mostrarLogin() {
        if (loginClick) {
            setLoginClick(false)
        } else {
            setLoginClick(true)
        }
    }

    function cerrarLogin() {
        setLoginClick(false)
        setErrorLogin('')
    }

    const onChangeManejador = (e) => {
        setUsuarioIngresado({ ...usuarioIngresado, [e.target.name]: e.target.value })
        console.log(usuarioIngresado.email)
        console.log(usuarioIngresado.contrasena)
    }

    const ingresarALaCuenta = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usuarioIngresado.email, usuarioIngresado.contrasena)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            verificarCambioDeEstado()
            setLoginClick(false)
        })
        .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            console.log(errorCode)
            setErrorLogin(errorCode)
        });
    }

    const verificarCambioDeEstado = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
            console.log(user.email)
            setUsuarioLoggeado(true)
            setNombreUsuarioConectado(user.email)
        } else {
            console.log('No hay nadie conectado')
            setUsuarioLoggeado(false)
            //setGenerarh2(false)
        }
        });
    }

    const logout = ()=>{
        const auth = getAuth();
        signOut(auth)
    }

    const manejadorDeErrores = ( err ) => {
        if (err === "auth/user-not-found") {
            return "Usuario No Encontrado"
        } if (err === "auth/wrong-password") {
            return "Contraseña Incorrecta"
        }
        else {
            return err
        }
    }

    useEffect(() => {
        verificarCambioDeEstado()
    }, [])
    

    return (
        <div className="estilosDivLogin">
                {usuarioLoggeado 
                    ? 
                        <>
                            <h6>{nombreUsuarioConectado}</h6>
                            <div>
                                    <FontAwesomeIcon icon={faRightFromBracket} size='lg' inverse className="iconoLogIn" onClick={logout}/>
                                    <p className="estilosTextoLogin">Salir</p>
                            </div>
                        </>
                    :
                        <div>
                            <FontAwesomeIcon icon={faUser} size='lg' inverse onClick={mostrarLogin} className="iconoLogIn"/>
                            <p className="estilosTextoLogin">Login</p>
                        </div>
                }
                {loginClick &&
                        <div className="contenedorLogin" /*onMouseLeave={cerrarLogin} */>
                            <FontAwesomeIcon icon={faX} size='lg' onClick={cerrarLogin} className='icono'/> 

                            <h3>Log In</h3>
                            <form className="estilosFormulario" onSubmit={ingresarALaCuenta}>
                                <label htmlFor="usuario">Email</label>
                                <input type="email" id='emailUsuarioIngresado' name="email" required onChange={onChangeManejador} />
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id='contrasenaUsuarioIngresado' name="contrasena" required  onChange={onChangeManejador}/>
                                <button type="submit" id="botonLogIn" style={{margin: '10px 0px'}}>Log In</button> 
                            </form>
                            {errorLogin && 
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: 'yellow'}}/>
                                    <p style={{color: 'white', margin: '5px'}}>{manejadorDeErrores(errorLogin)}</p>
                                </div>}
                            <p style={{color: 'white', margin: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>No tenes una cuenta? </p>
                            <Link onClick={cerrarLogin} to="/registro">Registrate</Link>
                        </div> 
                }
        </div>
    )
}

export default LoginWidget