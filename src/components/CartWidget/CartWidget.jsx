import { Link } from "react-router-dom"


function CartWidget() {
  return (
    <div>
      <Link to="./carrito">
        <img src="./mbrishoppingcart_99558.svg" alt="iconoCarrito" />
      </Link>
    </div>
  )
}

export default CartWidget