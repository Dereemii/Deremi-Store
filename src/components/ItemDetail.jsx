import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {

    const firstItem = [...item][0]
    console.log(firstItem)

    return (
        <>
            <div className="itemDetailContainer">
                {
                    item.length ?
                        <>
                            <div className="itemDetail">
                                <div>
                                    <img src={firstItem.photo} alt={firstItem.photo} />
                                </div>
                                <div>
                                    <h3>{firstItem.name}</h3>
                                    <p>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(firstItem.price)}</p>
                                    <p>{firstItem.description}</p>
                                    <ItemCount stock={firstItem.stock} initial={1} />
                                    <div className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>
                                </div>
                            </div>
                        </>
                        : "Cargando datos ficha de producto..."
                }
            </div>
        </>
    );
}

export default ItemDetail;