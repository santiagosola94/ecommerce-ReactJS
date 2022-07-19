import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import './detalleCuenta.css'

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
        <>
            {datosDeUsuario && 
            <div className="contenedor">
                <div className="estilosTituloDetalleCuenta">
                    <h2>Datos de Usuario</h2>
                </div>
                <Table striped bordered hover className="estilosTabla" >
                    <thead className="estilosTheadDetalleCuenta">
                        <tr>
                            <th>#</th>
                            <th>Dato</th>
                        </tr>
                    </thead>

                    <tbody className="estilosTbodyDetalleCuenta">
                        <tr><th>Nombre</th><th>{datosDeUsuario.nombre}</th></tr>
                        <tr><th>Apellido</th><th>{datosDeUsuario.apellido}</th></tr>
                        <tr><th>Nombre de Usuario</th><th>{datosDeUsuario.nombreDeUsuario}</th></tr>
                        <tr><th>DNI</th><th>{datosDeUsuario.dni}</th></tr>
                        <tr><th>Id de Usuario</th><th>{datosDeUsuario.uid}</th></tr>
                        <tr><th>Provincia</th><th>{datosDeUsuario.provincia}</th></tr>
                        <tr><th>Localidad</th><th>{datosDeUsuario.localidad}</th></tr>
                        <tr><th>Direccion</th><th>{datosDeUsuario.direccion}</th></tr>
                    </tbody>
                </Table>
            </div>}
        </>
    )
}
