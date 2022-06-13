import { Row } from 'react-bootstrap'
import Item from '../Item/Item'

function ItemList({ productos }) {
    return (
        <div>
            <Row className="justify-content-md-center">
                { productos.map((producto) => (
                    <Item key={producto.id} producto={producto} /> 
                ))}
            </Row>
        </div>
    );
}


export default ItemList
