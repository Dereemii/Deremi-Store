import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';

const ItemDetail = ({ name, description, stock, photo, price, onAdd }) => {

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
                    <ItemCount stock={stock} initial={0} onAdd={onAdd} name={name} />
                    <div className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>

                </div>
            </div>
        </>
    );
}

export default ItemDetail;