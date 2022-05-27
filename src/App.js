import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer person="¿How are you?"/>
    </>
  );
}

export default App;
