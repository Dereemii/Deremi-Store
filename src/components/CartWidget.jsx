import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    return ( 
        <>
        <Link to={'/cart'} style={{ visibility: totalQuantity() > 0 ? 'visible' : 'hidden' }}> 
        🛒
        <span>{totalQuantity()}</span>
        </Link>
  
        

        </>
     );
}
 
export default CartWidget;