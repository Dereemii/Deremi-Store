import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
 
const Cart = () => {

    const { cart, emptyCart, priceToPay } = useContext(CartContext)

    return (
        <>
            <h2>Resumen del carrito </h2>
            <hr></hr>
            {
                cart.length === 0 ? 
                <div>
                No hay productos en tu carrito 
                <Link to={`/`}>Ir a comprar</Link>
                </div>
                
                :
                cart.map((item) => (
                    <div key={item.id}>
                    <div  className="miniCartContainer">
                    <div className="miniCart_right">
                            <img src={item.photo} alt={item.name} />
                        </div>
                        <div className="miniCart_left">
                            <h5>{item.name}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <h6>Precio: {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.totalPrice)}</h6>
                        </div>
                        <div className="miniCart_trash">🗑️</div>
                    </div>
                    
                       <hr></hr>
                    </div>
                ))
            }
            <div>Precio total {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())}</div>
            <button onClick={emptyCart}>vaciar carrito</button>
        </>
    );
}

export default Cart;