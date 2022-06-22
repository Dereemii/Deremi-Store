import { Link } from 'react-router-dom';


const Item = ({ productos }) => {

    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={productos.photo} alt="imagen de prueba" />
                </div>
                <h3>{productos.name}</h3>
                <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(productos.price)}</p>
                <Link
                    to={`/item/${productos.id}`}>
                    <button>Ir al producto</button>
                </Link>
            </div>
        </>
    );
}

export default Item;