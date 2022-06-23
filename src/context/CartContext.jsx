import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        if (item.quantity === 0) {
            alert(`Por favor añade productos a tu carrito`)
        } else {
            setCart([...cart, item]);
            alert(`añadiste ${item.quantity} de ${item.name} a tu carrito`)
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const priceToPay = () => {
        return cart.reduce((acc, prod) => acc += (prod.price * prod.quantity), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addItem,
                isInCart,
                emptyCart,
                priceToPay,
                totalQuantity,
                deleteItem
            }}>
            {children} {/* Aqui va toda la aplicación */}
        </CartContext.Provider>
    );
}

export default CartProvider;