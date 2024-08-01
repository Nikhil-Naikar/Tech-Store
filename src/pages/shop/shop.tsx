import {Product} from './product';
import './shop.css';
import { ShopContext} from '../../context/shop-context';
import { useContext } from 'react';

export const Shop = () => {
    const {items} = useContext(ShopContext);
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Cool Tech</h1>
            </div>
            <div className="products">
                {items && items.map((p) => (
                    <Product 
                        key={p.id}
                        id={p.id} 
                        productName={p.productName} 
                        price={p.price} 
                        productImage={p.productImage} 
                    />)
                    )
                }
            </div>
        </div>
    )
}