import Product from './Product';
import { useState,useEffect } from 'react';


const Products = () => {
const [products ,setProduct]=useState([]);
 useEffect(()=>{
    fetch('/api/products')
     .then(response=>
      {
         return response.json()
      })



     .then(products=>{
      console.log(products);


     });
 },[products]);
    

  return (
    <div className="container mx-auto pb-24">
    <h1 className="text-lg font-bold my-8">Products</h1>
     <div className="grid grid-cols-5 my-8 gap-24">

   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   


   </div>
    </div>
  )
}

export default Products;