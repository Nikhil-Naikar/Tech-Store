import './shop.css';
import { ShopContext,Item } from '../../context/shop-context';
import { useContext } from 'react';


export const Product = (data:Item) => {
    const {id, productName, price, productImage} = data; 
    const {cartItems, addToCart} = useContext(ShopContext);

    const cartItemAmount = cartItems?.[id] ?? 0;
    return (
       <div className="product">
            <img src={productImage}/>
            <div className="description">
                <p> 
                    <b>{productName}</b> 
                </p>
                <p> ${price} </p>
            </div>
            <button className='addToCartBttn' onClick={() => {addToCart(id)}}>
                Add To Chart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
       </div> 
    )
}