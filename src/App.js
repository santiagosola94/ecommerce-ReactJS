import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import { Cart } from './components/Cart/Cart';
import { FormularioRegistro } from './components/FormularioRegistro/FormularioRegistro';
import { DetalleCuenta } from './components/DetalleCuenta/DetalleCuenta';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Sportside Indumentaria Deportiva'/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer greeting='Sportside Indumentaria Deportiva'/>}/>
          <Route path="/detalles/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Cart/>} />
          <Route path="/registro" element={<FormularioRegistro />} />
          <Route path="/cuenta" element={<DetalleCuenta />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
