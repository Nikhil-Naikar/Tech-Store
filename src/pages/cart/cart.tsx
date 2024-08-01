import { ShopContext} from '../../context/shop-context';
import { useContext } from 'react';
import { CartItem } from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const {items, cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1> Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {items && items.map( (p) => {
                    if (cartItems && cartItems[p.id] !== 0 ){
                        return <CartItem 
                                    key={p.id}
                                    id={p.id} 
                                    productName={p.productName} 
                                    price={p.price} 
                                    productImage={p.productImage} 
                                />;
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p> Subtotal: $ {totalAmount}</p>
                    <button onClick={() => navigate('/')}> Continue Shopping</button>
                    {/* <button> Checkout </button> */}
                </div>
                ):
                <h1>Your Cart is Empty</h1>
            }   
        </div>
    )
}