import Item from '../Item/Item'
import './test.css'

function ItemList({ productos }) {
    return (
        <div>
            <div className="justify-content-md-center m-0 probandoEstilos">
                { productos.map((producto) => (
                    <Item key={producto.id} producto={producto} /> 
                ))}
            </div>
        </div>
    );
}


export default ItemList
