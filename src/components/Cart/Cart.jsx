import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import '../ItemDetail/ItemDetail.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'


export const Cart = () => {
    const {carrito, vaciarContenido, eliminarProducto, transactionID, setTransactionID} = useContext(CartContext)


    const determinarPrecioFinal = ()=> {
        const final = carrito.reduce((acc, elemento) => acc + elemento.precioTotal, 0);
        return final
    }

    function generarOrden () {
        const comprador = { nombre: 'John', telefono: '234563', email: 'John@John.com'}
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

        const db = getFirestore()

        function crearOrden() {
            const createOrder = collection(db, 'orders')
            addDoc(createOrder, ordenGenerada)
                .then((resp) => setTransactionID(resp.id))

        }
        
        crearOrden()
        
        async function modificarStock() {
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
            })
    
            batch.commit()
        }

        modificarStock()

    }

    return (
        <div className="estilosBackgroundFondo">
            {transactionID === '' ? '' : 
                <div className="divIdTransaccion alMedio">
                    <h3>Id de la Transaccion</h3>
                    <h4>{transactionID}</h4>
                </div>
                }
            {carrito.length === 0 ? 
            <div className="estiloDivCarritoVacio">
                <h4 className="AlMedio">
                    No agregaste productos al carrito. Click aqui abajo para volver
                </h4>
                <Link to='/'><Button variant='dark'>Ir a inicio</Button></Link>
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
