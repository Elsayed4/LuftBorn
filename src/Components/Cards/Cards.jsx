import './Cards.scss';
import Cart from '../Cart/Cart';
import {useState, useEffect} from "react";
function Carts() {
const [products,setProducts] = useState([]);

  const featchproducts = () => {
    return fetch('https://fakestoreapi.com/products?limit=8').
    then(res => res.json()).then(json => setProducts(json))
  }

  useEffect(() => {
    featchproducts();
  },[])

  console.log(products)

  return (
    <>
      <section className='Carts'>
        <div className='container'>
          <div className='Carts_container'>
         
         {
           products.map(product => <Cart key={product.id} category={product.category}
           image={product.image} price={product.price}
           />)
         }
             
         
         </div>
        </div>
      </section>
    </>
  );
}

export default Carts;
