import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartCounter = ({ quantity }) => {

    const sumar = () =>{
        console.log(quantity + 1)
    }
    const restar = () =>{
        console.log(quantity - 1)
    }

    return (<>
        <div>
            <div>
                <span>
                    <button onClick={restar} ><FontAwesomeIcon icon={faMinus} /></button>
                </span>
                <span>{quantity}</span>
                <span>
                    <button onClick={sumar}><FontAwesomeIcon icon={faPlus} /></button>
                </span>
            </div>
        </div>
    </>);
}

export default CartCounter;