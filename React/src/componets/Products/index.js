import React from "react";
import './style.scss'
import {Link} from 'react-router-dom'



function Products (props) {
    
    const { item, price, img, product, } = props; 
    
   

    return (
    

        <>
        
    
       
        <div className='product'>  
         <div className="info"> 
         <Link to={`/product/${product}`}> <p className='pItem'>{item}</p>  </Link>
          <p className="pPrice">${price}</p>
    
           
          </div>
          <div className="itemImg">
          <img alt="product" src={img}/>
          </div>
          </div>

        </>

    );
}

export default Products;