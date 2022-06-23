
import ItemList from './ItemList';
import { useEffect, useState } from "react";
import ProductsCatalogue from "../ProductsCatalogue.json";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productos, setProductos] = useState([]);

    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada");
                }
            }, 2000);
        });

    useEffect(() => {
        getData(ProductsCatalogue)
            .then((resp) => {
                if (!categoryId) {
                    setProductos(resp)
                } else {
                    setProductos(resp.filter((item) => item.category === categoryId))
                    let prodfilt = resp.filter((item) => item.category === categoryId)
                    console.log(prodfilt)
                }
            })
            .catch((err) => console.log(err));

    }, [categoryId]);


    return (
        <>
            <h1> {categoryId ? `Estás en la categoría ${categoryId}` : 'Bienvenido a la tienda'}</h1>

            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;