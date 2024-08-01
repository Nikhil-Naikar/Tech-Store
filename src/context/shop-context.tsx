import { createContext, useState } from "react";
import { PRODUCTS } from '../products';

export interface Item{
    id:number,
    productName:string,
    price:number,
    productImage:string
}


interface CartItems{
    [key: number]: number;
}

// write everything i want in this context, the variables and functions
interface ItemContextType{
    items: Item[] | null,
    cartItems: CartItems | null,
    addToCart: (itemId:number) => void,
    removeFromCart: (itemId:number) => void,
    updateCartItemCount: (newAmount:number, itemId:number) => void,
    getTotalCartAmount: () => number
}

// just an initial values for createContext
const contextInitialValues = {
    items: null,
    cartItems: null,
    addToCart: () => {},
    removeFromCart: () => {},
    updateCartItemCount: () => {},
    getTotalCartAmount: () => 0
}

// set the type and give it initial values
export const ShopContext = createContext<ItemContextType>(contextInitialValues);


interface Props{
    children: React.ReactNode;
}


export const ShopContextProvider = (props:Props) => {
    // in here I can do the state stuff and create functions
    const [items, setItem] = useState<Item[] | null>(PRODUCTS);

    const getDefaultCart = (): CartItems => {
        let cart:CartItems = {}
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
          }
        return cart;
    };
    const [cartItems, setCartItems] = useState<CartItems | null>(getDefaultCart());

    const addToCart = (itemId:number):void => {
        setCartItems((prev) => {
            if (prev === null){
                return {[itemId]: 1};
            }else{
                return {
                    ...prev,
                    [itemId]: (prev[itemId] ?? 0) + 1
                };
            }    
        });
    };

    const removeFromCart = (itemId:number):void => {
        setCartItems((prev) => {
            if (prev === null || (prev[itemId] ?? 0) <= 0){
                return prev;
            }else{
                return {
                    ...prev,
                    [itemId]: prev[itemId] - 1
                };
            }    
        });
    };

    const updateCartItemCount = (newAmount:number, itemId:number) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const getTotalCartAmount = () => {
        let totalAmount:number = 0;
        for(const item in cartItems){
            if(cartItems[Number(item)] > 0){
                let itemInfo = items?.find((i) => i.id === Number(item));
                if(itemInfo && itemInfo.price !== undefined){
                    totalAmount += cartItems[Number(item)] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    }

    return <ShopContext.Provider value={{items,cartItems,addToCart,removeFromCart, updateCartItemCount, getTotalCartAmount}}> {props.children} </ShopContext.Provider>
}