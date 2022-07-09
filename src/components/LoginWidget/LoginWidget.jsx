import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX } from '@fortawesome/free-solid-svg-icons'
import './loginWidget.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginWidget = () => {

    const [loginClick, setLoginClick] = useState(false)
    
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
    

    return (
        <div className="estilosDivLogin">
                <div>Bienvenido Santiago !</div>
                <div>
                    <FontAwesomeIcon icon={faUser} size='lg' inverse onClick={mostrarLogin} className="iconoLogIn"/>
                    <p className="estilosTextoLogin">Login</p>
                </div>
                {loginClick ? 
                        <div className="contenedorLogin" /*onMouseLeave={cerrarLogin} */>
                            <FontAwesomeIcon icon={faX} size='lg' onClick={cerrarLogin} className='icono'/> 

                            <h3>Log In</h3>
                            <form className="estilosFormulario">
                                <label htmlFor="usuario">Usuario</label>
                                <input type="text" id='usuario'/>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id='password'/>
                                <Button variant="danger" style={{margin: '10px 0px'}}>Log In</Button> 
                            </form>
                            <p style={{color: 'white'}}>No tenes una cuenta? </p>
                            <Link onClick={cerrarLogin} to="/registro">Registrate</Link>
                        </div> 
                    : ''}
        </div>
    )
}

export default LoginWidget