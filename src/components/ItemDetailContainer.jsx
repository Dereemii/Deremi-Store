import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        //1.- armar la referencia
        const docRef = doc(db, "productos", itemId)
        //2.- llamar a firestore
        getDoc(docRef)
            .then((resp) => {
                setItem({ id: resp.id, ...resp.data()})
            })

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