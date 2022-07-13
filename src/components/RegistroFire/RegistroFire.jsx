import React, { useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';



const RegistroFire = () => {
    const [correo, setCorreo] = useState('')
    const [pass, setPass] = useState('')
    const [generarH2, setGenerarh2] = useState('')
    const [test, setTest] = useState('')


    const crearNuevaCuenta = ()=> {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, correo, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const ingresarALaCuenta = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, correo, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            asdj()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const asdj = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
            console.log(user.email)
            setGenerarh2(true)
            setTest(user.email)
        } else {
            console.log('No hay nadie conectado')
            setGenerarh2(false)
        }
        });
    }

    /*const verInfoDeusuario = ()=>{
        const auth = getAuth();
        const user = auth.currentUser;

        if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;

        return console.log(displayName, email, photoURL, emailVerified, uid)
        }
    }*/


    /* Espacio de trabajo */

    useEffect(() => {
        asdj()
    }, [])
    

    const logout = ()=>{
        const auth = getAuth();
        signOut(auth)
        asdj()
    }
    return (
        <>
            <div>
                {generarH2 ? <h2>Estas conectado como: {test}</h2> : ''}
            </div>
            <div style={{backgroundColor: 'yellow', height: '40vh'}}>
                <h2>Registro</h2>
                <label htmlFor="email">Usuario</label>
                <input type="email" name="usuario" id="email" onChange={(e)=> setCorreo(e.target.value)}></input>
                <label htmlFor="pass">Contraseña</label>
                <input type="password" name="usuarpassio" id="pass" onChange={(e)=> setPass(e.target.value)}></input>
                <button type="submit" onClick={crearNuevaCuenta}>Crear Cuenta</button>
            </div>
            <div style={{backgroundColor: 'blue', height: '40vh'}}>
                <h2>Log In</h2>
                <label htmlFor="emailinicio">Email</label>
                <input type="email" name="usuario" id="emailinicio" onChange={(e)=> setCorreo(e.target.value)}></input>
                <label htmlFor="passinicio">Contraseña</label>
                <input type="password" name="usuarpassio" id="passinicio" onChange={(e)=> setPass(e.target.value)}></input>
                <button type="submit" onClick={ingresarALaCuenta}>Ingresar</button>
            </div>
            <div style={{backgroundColor: 'yellow', height: '10vh'}}>
                <label htmlFor="salir">Salir de la cuenta</label>
                <button name="salir" onClick={logout}>Salir</button>
            </div>

        </>
    )
}

export default RegistroFire