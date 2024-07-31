import { PRODUCTS } from '../../products';
import {Product} from './product';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Cats Toys</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((p) => <Product />)}
            </div>
        </div>
    )
}