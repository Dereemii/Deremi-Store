import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])
  console.log()
  
  const addItem = (item) => {
    if( item.quantity === 0){
      alert(`Por favor añade productos a tu carrito`)
  } else{
    setCart([...cart, item]);
    alert(`añadiste ${item.quantity} de ${item.name} a tu carrito`)
  }
  };

  const isInCart = (id)=>{
    return cart.some((prod)=>prod.id===id)
  }

  return (

    <CartContext.Provider value = {{ cart, setCart, addItem, isInCart}}>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>

    </CartContext.Provider>

  );
}

export default App;
