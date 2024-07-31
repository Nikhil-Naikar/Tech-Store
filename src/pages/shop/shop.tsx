import { PRODUCTS } from '../../products';
import {Product} from './product';
import './shop.css';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Cool Tech</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((p) => <Product id={p.id} productName={p.productName} price={p.price} productImage={p.productImage} />)}
            </div>
        </div>
    )
}