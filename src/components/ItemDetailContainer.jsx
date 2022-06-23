import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import ProductsCatalogue from "../ProductsCatalogue.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('No se encontró nada');
                }
            }, 2000);
        });

    useEffect(() => {
        getItem(ProductsCatalogue)
            .then((res) => {
                setItem(res.find((details) => details.id === itemId));
            })

            .catch((err) => console.log(err));
    }, [itemId]);



    return (
        <>
            <h2>Product Detail Example</h2>
            <div className="itemDetailContainer">
                {item ? (
                    <ItemDetail
                        item={item}
                        id={item.id}
                        photo={item.photo}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                    />
                ) : (
                    "Cargando ficha de productos..."
                )}
            </div>
        </>
    );
}

export default ItemDetailContainer;