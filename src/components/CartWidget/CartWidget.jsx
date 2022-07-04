import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faLayerGroup, faEnvelope, faLayerGroupCount } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './cartWidget.css'



function CartWidget() {
    const {carrito} = useContext(CartContext)
    

    const MostrarCantidadCarrito = ()=>{
        const cantidad = carrito.reduce((acc, elemento)=> acc + elemento.cantidad, 0)
        return cantidad
    }

    return (
        <div className="cartWidgetFlex">
            <div className='estilosDivCartWidget'>
                <Link to="./carrito">
                    <FontAwesomeIcon icon={faCartShopping} inverse  />            
                </Link>
                <span className="estilosCartWidgetCount">{MostrarCantidadCarrito() > 0 ? MostrarCantidadCarrito() : '' }</span>
            </div>
        </div>
    )
}

export default CartWidget