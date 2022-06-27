import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import '../ItemDetail/ItemDetail.css'


export const Cart = () => {
    const {carrito, vaciarContenido, eliminarProducto} = useContext(CartContext)
    console.log(carrito)
    return (
        <div className="estilosBackgroundFondo">
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
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Remover Producto</th>
                        </tr>
                    </thead>
                    <tbody className="alMedio colorTbody prueba">
                        {carrito.map((item) => 
                            <tr key={item.id} className="colorLetra">
                                <td>{item.id}</td>
                                <td><img src={item.img} className="estilosImagen"></img></td>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precio}</td>
                                <td><button key={item.id} onClick={(e) => eliminarProducto(item.id, e)}>Eliminar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button onClick={vaciarContenido} className="btn btn-primary alMedio estilosBoton">Vaciar contenido Carrito</button>
                
            </>
            }
        </div>
    )
}
