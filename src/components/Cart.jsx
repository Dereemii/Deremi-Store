import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {

    const { cart } = useContext(CartContext)
    return (
        <>
            <h2>Resumen del carrito </h2>
            <hr></hr>
            {
                cart.map((item) => (
                    <div key={item.id}>
                    <div  className="miniCartContainer">
                    <div className="miniCart_right">
                            <img src={item.photo} alt={item.name} />
                        </div>
                        <div className="miniCart_left">
                            <h5>{item.name}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <h6>Precio: $ {item.totalPrice}</h6>
                        </div>
                    </div>
                       <hr></hr>
                    </div>
                ))
            }
        </>
    );
}

export default Cart;