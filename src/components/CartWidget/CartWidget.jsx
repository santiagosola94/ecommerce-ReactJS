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

            {MostrarCantidadCarrito() > 0 && <p className={MostrarCantidadCarrito() > 5 ? 'hola' : 'chau'}>{MostrarCantidadCarrito()}</p>}


            <Link to="./carrito">
                <img src="./mbrishoppingcart_99558.svg" alt="iconoCarrito" />
            </Link>

        </div>
    )
}

export default CartWidget