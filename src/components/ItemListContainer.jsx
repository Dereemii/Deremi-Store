
import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        //1.- Armar la referencia
        const productsRef = collection(db, "productos");
        //2.- Llamar a firebase 
        getDocs(productsRef)
            .then((resp)=>{
                setProductos(resp.docs.map((doc)=>doc.data()))
            })

    }, [categoryId]);


    return (
        <>
            <h1> {categoryId ? `Estás en la categoría ${categoryId}` : 'Bienvenido a la tienda'}</h1>

            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;