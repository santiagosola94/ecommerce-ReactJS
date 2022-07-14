import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

export const DetalleCuenta = () => {
    const [datosDeUsuario, setDatosDeUsuario] = useState('');
    
    const infoUsuario = ()=>{
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const db = getFirestore();
                    const traerInfoUser = collection(db, 'users')
                    const usuarioEncontrado = query(traerInfoUser, where('uid', '==', user.uid));
                    getDocs(usuarioEncontrado)
                    .then((resp)=> (resp.docs.forEach((item)=> setDatosDeUsuario(item.data()))))
                } 
            })
        }
    


    useEffect(() => {
        infoUsuario()
    }, [])

    return (
        <div className="contenedor">
            {datosDeUsuario && 
            <>
                <h2>{datosDeUsuario.nombre}</h2>
                <h2>{datosDeUsuario.apellido}</h2>
                <h2>{datosDeUsuario.nombreDeUsuario}</h2>
                <h2>{datosDeUsuario.dni}</h2>
                <h2>{datosDeUsuario.uid}</h2>
                <h2>{datosDeUsuario.provincia}</h2>
                <h2>{datosDeUsuario.localidad}</h2>
                <h2>{datosDeUsuario.direccion}</h2>
                
            </>}
        </div>
    )
}
