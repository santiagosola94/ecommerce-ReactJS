import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Sportside Indumentaria Deportiva'/>
      <ItemCount stock='10' valorInicial='1'/>
    </>
  );
}

export default App;
