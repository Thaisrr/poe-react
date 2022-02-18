import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../store/basket.js";

const Redux = () => {
    // Pour récupérer une valeur dans le store
    const count = useSelector((state) => state.basket.value );
    const dispatch = useDispatch();
    const addBasket = () => dispatch(add())
    function rmvBasket() {
        dispatch(remove())
    }

    return (
        <>
            <h1>Redux</h1>
            <p>Il y a {count} éléments dans mon panier</p>
            <div>
                <button onClick={addBasket}> + Add to basket</button>
                <button onClick={rmvBasket}> - Remove from basket</button>
            </div>
        </>
    )
}

export default Redux;
