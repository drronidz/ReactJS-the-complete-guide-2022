import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store";

const CartItem = (props) => {
    const dispatch = useDispatch()

    const { id, name, quantity, totalPrice, price} = props.item;

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            title: name
        }))
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${totalPrice.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
