
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({item, name, description, stock, photo, price }) => {

    const {cart, setCart} = useContext(CartContext)
    console.log(cart)

    let [quantity, setQuantity] = useState(1);
    let [showCount, setShowCount] = useState(true)

    const addToCart = () =>{
        const totalPrice = quantity *(price)
 
        if(quantity === 0){
            alert(`Por favor añade productos a tu carrito`)
        } else{
            alert(`Agregaste ${quantity} items y el precio es ${totalPrice}`)
            setShowCount(false)
        }

        const itemToCart = {
            ...item,
            quantity: quantity,
            totalPrice: totalPrice,
        }

        setCart([...cart, itemToCart])
    }

    
    return (
        <>
            <div className="itemDetail">
                <div>
                    <img src={photo} alt={photo} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
                    <p>{description}</p>
                    {showCount === true ? <ItemCount stock={stock} initial={0} onAdd={addToCart} setCounter={setQuantity}  />
                     : 
                     <Link to={`/cart`}>
                     <button>Finalizar Compra</button>
                     </Link>
                    }
                
                </div>
            </div>
        </>
    );
}

export default ItemDetail;