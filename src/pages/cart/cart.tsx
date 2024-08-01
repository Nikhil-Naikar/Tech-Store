import { ShopContext} from '../../context/shop-context';
import { useContext } from 'react';
import { CartItem } from './cart-item';
import './cart.css';

export const Cart = () => {
    const {items, cartItems} = useContext(ShopContext);
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
        </div>
    )
}