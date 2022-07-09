import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
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
                    <FontAwesomeIcon icon={faCartShopping} size='lg' inverse className='iconoLogIn'/>            
                </Link>
                <p className="estilosTextoIconoCarrito">Carrito</p>
                <span className="estilosCartWidgetCount">{MostrarCantidadCarrito() > 0 ? MostrarCantidadCarrito() : '' }</span>
            </div>
        </div>
    )
}

export default CartWidget