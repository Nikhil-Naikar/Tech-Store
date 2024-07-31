import product1 from "./assests/products/1.png";
import product2 from "./assests/products/2.png";
import product3 from "./assests/products/3.png";
import product4 from "./assests/products/4.png";
import product5 from "./assests/products/5.png";
import product6 from "./assests/products/6.webp";
import product7 from "./assests/products/7.webp";
import product8 from "./assests/products/8.webp";

interface item{
  id:number,
  productName:string,
  price:number,
  productImage:string
}

export const PRODUCTS:item[] = [
    {
      id: 1,
      productName: "IPhone",
      price: 999.0,
      productImage: product1,
    },
    {
      id: 2,
      productName: "Macbook Pro 2022 (M1)",
      price: 1999.0,
      productImage: product2,
    },
    {
      id: 3,
      productName: "Cannon M50 Camera",
      price: 699.0,
      productImage: product3,
    },
    {
      id: 4,
      productName: "WLS Van Gogh Denim Jacket",
      price: 228.0,
      productImage: product4,
    },
    {
      id: 5,
      productName: "LED Light Strips",
      price: 19.99,
      productImage: product5,
    },
    {
      id: 6,
      productName: "SPECTRUM LS TEE",
      price: 68.0,
      productImage: product6,
    },
    {
      id: 7,
      productName: "AUTO SERVICE SHIRT by GOLF WANG",
      price: 120.0,
      productImage: product7,
    },
    {
      id: 8,
      productName: "DON'T TRIP UNSTRUCTURED HAT",
      price: 40.0,
      productImage: product8,
    },
  ];