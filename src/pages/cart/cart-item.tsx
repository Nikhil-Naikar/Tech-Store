import { ShopContext,Item } from '../../context/shop-context';
import { useContext } from 'react';
import './cart.css';


export const CartItem = (data:Item) => {
    const {id, productName, price, productImage} = data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    
    const cartValue = cartItems?.[id] ?? 0;
    return (
        <div className="cartItem">
            <img src={productImage} />
            <div className='description'>
                <p> 
                    <b> {productName} </b>
                </p>
                <p> 
                    ${price}
                </p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div> 
        </div>
    )
}