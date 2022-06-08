
import ItemList from './ItemList';
import { useEffect, useState } from "react";
import ProductsCatalogue from "../ProductsCatalogue.json";

const ItemListContainer = (props) => {


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
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));

    }, []);

    return (
        <>
            <h1>Hey, Wellcome {props.person}</h1>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;