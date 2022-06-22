
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, description, stock, photo, price }) => {
    let [count, setCount] = useState(1);
    let [showCount, setShowCount] = useState(true)

    
    const addToCart = () =>{
        const totalPrice = count *(price)
 
        if(count === 0){
            alert(`Por favor añade productos a tu carrito`)
        } else{
            alert(`Agregaste ${count} items y el precio es ${totalPrice}`)
            setShowCount(false)
        }
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
                    {showCount === true ? <ItemCount stock={stock} initial={0} onAdd={addToCart} setCounter={setCount} />
                     : 
                     <Link to={`/cart`}>Finalizar Compra</Link>
                    }
                
                </div>
            </div>
        </>
    );
}

export default ItemDetail;