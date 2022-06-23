import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import { Cart } from './components/Cart/Cart';

// <Route path="*" element={<Navigate to="/" />} />


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Sportside Indumentaria Deportiva'/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer greeting='Sportside Indumentaria Deportiva'/>}/>
          <Route path="/detalles/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Cart/>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
