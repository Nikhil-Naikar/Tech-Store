import './shop.css';

interface Item{
    id:number,
    productName:string,
    price:number,
    productImage:string
  }

export const Product = (data:Item) => {
    const {id, productName, price, productImage} = data; 
    return (
       <div className="product">
            <img src={productImage}/>
            <div className="description">
                <p> 
                    <b>{productName}</b> 
                </p>
                <p> ${price} </p>
            </div>
            <button className='addToCartBttn'>
                Add To Chart
            </button>
       </div> 
    )
}