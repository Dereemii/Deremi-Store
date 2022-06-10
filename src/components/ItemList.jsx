import Item from "./Item";



const ItemList = ({ productos }) => {

    return (
        <>

            <div className="productsContainer">
                {productos.length
                    ? productos.map((productos) => (
                        <Item productos={productos} key={productos.id} />
                    ))
                    : 'Cargando productos...'}
            </div>
        </>
    );
}

export default ItemList;