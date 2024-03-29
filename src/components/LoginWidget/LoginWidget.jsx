import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faX, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import './loginWidget.css'
import { Link, NavLink } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Dropdown } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const LoginWidget = () => {
    const {setCuentaConectada} = useContext(CartContext)
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
    }

    const ingresarALaCuenta = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usuarioIngresado.email, usuarioIngresado.contrasena)
        .then((userCredential) => {
            const user = userCredential.user;
            verificarCambioDeEstado()
            traerDatosDeUsuario(user.email)
            setLoginClick(false)
        })
        .catch((error) => {
            const errorCode = error.code;
            setErrorLogin(errorCode)
        });
    }

    const verificarCambioDeEstado = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuarioLoggeado(true)
            setNombreUsuarioConectado(user.email)
            traerDatosDeUsuario(user.email)
        } else {
            setUsuarioLoggeado(false)
        }
        });
    }

    async function traerDatosDeUsuario(email) {
        const db = getFirestore()
        const traerDatosDeUsuario = collection(db, 'users')
        const queryInfoUsuario = query(traerDatosDeUsuario, where('email', '==', email))
        await getDocs(queryInfoUsuario)
        .then((resp)=> (resp.docs.forEach((item)=> setCuentaConectada(item.data()))))
    }

    const logout = ()=>{
        const auth = getAuth();
        signOut(auth)
        setCuentaConectada(false)
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
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {nombreUsuarioConectado}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to='/cuenta'>Mi cuenta</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="estilosDivIconoSalir">
                                    <FontAwesomeIcon icon={faRightFromBracket} size='lg' inverse className="iconoLogIn" onClick={logout}/>
                                    <p className="estilosTextoLogin">Salir</p>
                            </div>
                        </>
                    :
                        <div className="estilosDivIconoLogin">
                            <FontAwesomeIcon icon={faUser} size='lg' inverse onClick={mostrarLogin} className="iconoLogIn"/>
                            <p className="estilosTextoLogin">Login</p>
                        </div>
                }
                {loginClick &&
                        <div className="contenedorLogin">
                            <FontAwesomeIcon icon={faX} size='lg' onClick={cerrarLogin} className='icono'/> 

                            <h3>Log In</h3>
                            <form className="estilosFormulario" onSubmit={ingresarALaCuenta}>
                                <label htmlFor="usuario">Email</label>
                                <input type="email" id='emailUsuarioIngresado' name="email" required onChange={onChangeManejador} />
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id='contrasenaUsuarioIngresado' name="contrasena" required  onChange={onChangeManejador}/>
                                <button type="submit" id="botonLogIn" className="btn btn-primary my-2" >Log In</button> 
                            </form>
                            {errorLogin && 
                                <div className="divErrorLogIn">
                                    <FontAwesomeIcon icon={faTriangleExclamation} size="lg" className="fondoAmarillo"/>
                                    <p className="divErrorLogInP">{manejadorDeErrores(errorLogin)}</p>
                                </div>}
                            <p className="logInTexto">No tenes una cuenta? </p>
                            <Link onClick={cerrarLogin} to="/registro">Registrate</Link>
                        </div> 
                }
        </div>
    )
}

export default LoginWidget