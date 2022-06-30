import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import '../ItemDetail/ItemDetail.css'


export const Cart = () => {
    const {carrito, vaciarContenido, eliminarProducto} = useContext(CartContext)

    const determinarPrecioFinal = ()=> {
        const final = carrito.reduce((acc, elemento) => acc + elemento.precioTotal, 0);
        return final
    }

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
                    <button className="btn btn-warning alMedio estilosBoton">Pagar</button>
                </div>
            </>
            }
        </div>
    )
}
