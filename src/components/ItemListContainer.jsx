
import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        //1.- Armar la referencia
        const productsRef = collection(db, "productos");
        const q = categoryId ? query(productsRef, where("category", "==", "categoryId")) : productsRef
        
        //2.- Llamar a firebase 
        getDocs(q)
            .then((resp)=>{
                const newItems = resp.docs.map((doc)=>{
                    return{
                        id: doc.id,
                        ...doc.data() /* Data: metodo de firestore */
                    }
                });
                //console.log(newItems)
                setProductos(newItems)
            })

    }, [categoryId]);


    return (
        <>
            <h1> {categoryId ? `Estás en la categoría ${categoryId}` : 'Bienvenido a la tienda'}</h1>

            <ItemList productos={productos}/>
        </>
    );
}

export default ItemListContainer;