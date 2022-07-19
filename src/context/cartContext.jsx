import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) =>{
    const [carrito, setCarrito] = useState([])
    const [transactionID, setTransactionID] = useState('')
    const [cuentaConectada, setCuentaConectada] = useState('')

    const vaciarContenido = ()=> {
        setCarrito([])
    }

    const addToCart = (item)=> {
        carrito.some((p) => p.id === item.id) 
            ? verificarCantidadDelProducto(item)
            : setCarrito([...carrito, item])
    }

    /* Esta funcion se dedica a eliminar el producto. Primero detectamos el boton del producto correspondiente. 
    Luego conseguimos su indice en el array "Carrito" y guardamos su posicion en la variable indiceProductoEncontrado
    Por ultimo, aplicamos un splice, que borra el producto del array, y generamos un cambio de estado, provocando
    un nuevo render.*/

    const eliminarProducto = (id, e)=>{
        const productoEncontrado = carrito.find((p)=> p.id === id )
        console.log(productoEncontrado)
        const indiceProductoEncontrado = carrito.indexOf(productoEncontrado)
        console.log(indiceProductoEncontrado)
        carrito.splice(indiceProductoEncontrado, 1)
        console.log(carrito)
        setCarrito([...carrito])
    }

    /* Esta funcion se dedica exclusivamente a evitar la duplicacion de items en el carro. 
    Va a sumar la cantidad de camisetas, siempre y cuando exista stock. Si no existe stock, se resta la cantidad
    y se produce un nuevo render.
    Primero conseguimos un objeto con el producto duplicado, el cual se almacena en la variable productoEncontrado. 
    Segundo: Guardarmos la posicion del producto duplicado en la variable indiceProductoEncontrado.
    Tercero: Al producto ya seleccionado anteriormente, se le suma la cantidad del producto seleccionado con posterioridad.
    A lo que si primero seleccione 2 camisetas, luego, en la linea 52, se le sumara la cantidad seleccionada.
    Ejemplo: primero selecciono 2 camisetas, luego selecciono 3 camisetas. Se sumara en la linea 52 = 2 + 3 = 5.
    Por ultimo va a verificar si existe stock para la cantidad de camisetas. Si existe, producira un cambio en el estado 
    y se generara un nuevo render. Y si no existiese stock para la cantidad de camisetas seleccionadas, unicamente
    restara los productos y dejara la cantidad que habia seleccionado por primera vez, modificando el estado y 
    generando un nuevo render.*/
    const verificarCantidadDelProducto = (item) => {
        const productoEncontrado = carrito.find((p)=> p.id === item.id )
        const indiceProductoEncontrado = carrito.indexOf(productoEncontrado)
            carrito[indiceProductoEncontrado].cantidad += item.cantidad
            if (carrito[indiceProductoEncontrado].cantidad <= carrito[indiceProductoEncontrado].stock){
                setCarrito([...carrito])
            } else { 
                carrito[indiceProductoEncontrado].cantidad -= item.cantidad
                setCarrito([...carrito])
                alert('La cantidad ingresada supera el stock del producto. Ingrese otra cantidad o borre el item del carrito')
                console.log(carrito)
                }
}

    return(
        <CartContext.Provider
            value={{carrito, addToCart, vaciarContenido, eliminarProducto, transactionID, setTransactionID, cuentaConectada, setCuentaConectada}}>
            {children}
        </CartContext.Provider>
    )}

