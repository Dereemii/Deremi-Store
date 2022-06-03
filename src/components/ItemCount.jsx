import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)

    const onDecrease = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const onIncrease = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="counterCard">
                <div>
                    <span>
                        <button onClick={onDecrease} ><FontAwesomeIcon icon={faMinus} /></button>

                    </span>
                    <span>{count}</span>
                    <span>
                        <button onClick={onIncrease}><FontAwesomeIcon icon={faPlus} /></button>
                    </span>
                </div>
                <div style={{ visibility: count >= stock ? 'visible' : 'hidden' }} className="stockOver">Stock máximo alcanzado</div>
            </div>

        </>
    );
}

export default ItemCount;