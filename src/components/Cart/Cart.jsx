import { Button, Table } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import '../ItemDetail/ItemDetail.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'


export const Cart = () => {
    const {carrito, vaciarContenido, eliminarProducto, transactionID, setTransactionID, cuentaConectada} = useContext(CartContext)
    const [mensajeErrorLogIn, setMensajeErrorLogIn] = useState(false)
    const [compraFinalizada, setCompraFinalizada] = useState(false)

    const determinarPrecioFinal = ()=> {
        const final = carrito.reduce((acc, elemento) => acc + elemento.precioTotal, 0);
        return final
    }

    function generarOrden () {
        if (cuentaConectada) {
            const comprador = {     nombre:cuentaConectada.nombre, 
                                    apellido:cuentaConectada.apellido, 
                                    direccion: cuentaConectada.direccion,
                                    dni: cuentaConectada.dni,
                                    localidad: cuentaConectada.localidad,
                                    provincia: cuentaConectada.provincia,
                                    uid: cuentaConectada.uid
                                }
    
            const items = carrito.map((item)=>{
                const id = item.id
                const titulo = item.nombre
                const precio = item.precio
                const cantidad = item.cantidad
                return {id, titulo, precio, cantidad}
            });
            const total = determinarPrecioFinal()
    
            const ordenGenerada = {comprador, items, total}
            console.log(ordenGenerada)
    
            crearOrden()
            modificarStock()


            function crearOrden() {
                const db = getFirestore()
                const createOrder = collection(db, 'orders')
                addDoc(createOrder, ordenGenerada)
                    .then((resp) => setTransactionID(resp.id))
    
            }
            async function modificarStock() {
                const db = getFirestore()
                const queryCollectionStock = collection(db, 'productos')
                const queryActualizarStock = query( queryCollectionStock , 
                    where( documentId(), 'in', carrito.map(item => item.id )))
                
                
                const batch = writeBatch(db)
        
                await getDocs(queryActualizarStock)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - carrito.find(item => item.id === res.id).cantidad
                })))
                .finally(()=> {
                    vaciarContenido()
                    setCompraFinalizada(true)
                })
        
                batch.commit()
            }
        } else {
            setMensajeErrorLogIn(true)
            setTimeout(() =>setMensajeErrorLogIn(false), 5000)
        }
    }


    return (
        <div className="estilosBackgroundFondo">
            {mensajeErrorLogIn &&
                <div className="alert alert-danger alMedio estilosAlerta">
                    <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: 'yellow'}}/>
                    <h4>Para poder terminar la compra, debes loggearte</h4>
                </div>
            }

            {carrito.length === 0 ? 
                <div className="estiloDivCarritoVacio">
                    {compraFinalizada ? 
                        <div>
                            <div className="alert alert-success m-1">
                                <FontAwesomeIcon icon={faCircleCheck} style={{margin: '0px 10px'}} />
                                Felicidades! La compra ha sido finalizada correctamente
                            </div>
                            <div className="alMedio" >
                                <h3>Datos de Envio</h3>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Dato</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr><th>Nombre:</th><th>{cuentaConectada.nombre}</th></tr>
                                            <tr><th>Apellido:</th><th>{cuentaConectada.apellido}</th></tr>
                                            <tr><th>DNI:</th><th>{cuentaConectada.dni}</th></tr>
                                            <tr><th>Provincia:</th><th>{cuentaConectada.provincia}</th></tr>
                                            <tr><th>Localidad:</th><th>{cuentaConectada.localidad}</th></tr>
                                            <tr><th>Direccion:</th><th>{cuentaConectada.direccion}</th></tr>
                                            <tr><th>Id Transaccion:</th><th>{transactionID}</th></tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    : <>
                        <h4 className="AlMedio">
                            No agregaste productos al carrito. Click aqui abajo para volver
                        </h4>
                        <Link to='/'><Button variant='dark'>Ir a inicio</Button></Link>
                    </> }
                </div>
            : 
            <>
                <table className="estiloTabla">
                    <thead className="colorThead alMedio">
                        <tr>
                            <th>#</th>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                            <th>Remover Producto</th>
                        </tr>
                    </thead>
                    <tbody className="alMedio colorTbody">
                        {carrito.map((item) => 
                            <tr key={item.id} className="colorLetra">
                                <td className="widthTh">{carrito.indexOf(item)}</td>
                                <td><img src={item.img} className="estilosImagen"></img></td>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                                <td>${item.precio}</td>
                                <td>${item.precioTotal}</td>
                                <td><button key={item.id} onClick={(e) => eliminarProducto(item.id, e)} className="btn btn-danger">Eliminar</button></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot className="colorThead alMedio">
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Precio Final:</th>
                            <th>${determinarPrecioFinal()}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
                <div className="flexDivBotonesCarrito">
                    <button onClick={vaciarContenido} className="btn btn-primary alMedio estilosBoton">Vaciar contenido Carrito</button>
                    <button onClick={generarOrden} className="btn btn-warning alMedio estilosBoton">Pagar</button>
                </div>
            </>
            }
        </div>
    )
}
