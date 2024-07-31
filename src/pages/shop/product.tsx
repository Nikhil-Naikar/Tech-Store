import './shop.css';
import { ShopContext,Item } from '../../context/shop-context';
import { useContext } from 'react';


export const Product = (data:Item) => {
    const {id, productName, price, productImage} = data; 
    const {addToCart} = useContext(ShopContext);
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
                Add To Chart
            </button>
       </div> 
    )
}