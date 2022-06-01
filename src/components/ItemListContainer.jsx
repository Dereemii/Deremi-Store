import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
            <h1>Listado de Productos</h1>
            <h1>Hey, Wellcome {props.person}</h1>

            <section>
                <ItemCount stock="5" initial="1" />
            </section>
        </>
    );
}

export default ItemListContainer;