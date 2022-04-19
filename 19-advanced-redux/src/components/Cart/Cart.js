import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items)
    const cartIsEmpty = cartItems.length === 0

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {cartIsEmpty && <p>Cart is empty ...</p>}
            <ul>
                {cartItems && cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}/>
                    ))
                }
            </ul>
        </Card>
    );
};

export default Cart;
