import React, { useEffect, useState } from 'react'
import './style.scss'
import Navbar from '../../componets/Navbar'
import Total from '../../componets/Total'
import Item from '../../componets/Item'


function Cart() {
  const [products, setProducts] = useState([]);
  const [total,setTotal] = useState(0);
 


  


 useEffect(() => { 
  
  const stringifiedProducts = localStorage.getItem('cart')
  const products = JSON.parse(stringifiedProducts) 



  setProducts(products)

  let total = 0
  products && products.map((product) => {
    return (
    total = total + product.price
    )
  } )
  setTotal( total )

 }, [] );

function handleCallback(r,price) {
  
  const result = r === 'less' ? total - price : total + price

  setTotal(result)

}



   return (

<>

<Navbar/>


<div className='mainCart'> 

<div className='cart'>
<div className='lineCart'> </div>




{products && products.map((pro,key) => {
  return (
    
    <div className='itemCart' key={key}>
      
    {pro.poc.map((i,key) => {
      return (
        <>
        
        <img key={key} alt="product" className='imgCart'  src={i.url}/>
 
        </>
      )
    }  )}
     <Item handleCallback={(r,price) => handleCallback(r,price)} price={pro.price} title={pro.title} />
  
     
    </div>
    
    
    

  )
})}

<Total total={Math.round(total)} />

<div className='cartBuy'>

<button className='buyButton'>Continuar compra</button>

</div>

</div>




</div>




</>

)


}


export default Cart;