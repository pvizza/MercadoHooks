import React, { useState } from 'react'


function Item(props) {
    const {title, price} = props
    const [qty, setQty] = useState(1);

   
    function handleClick(r) {
        const result = r === 'less' ? qty - 1 : qty + 1
        
        if (result >= 1) {
         props.handleCallback(r,price)
         
       setQty(result) }
     
    }
     
        
    
     
        

    return (
<>
<div className='cartTitle'>
<p>{title}</p>
</div>
<div className="cartQty" > 
<button className='cartButton' onClick={() => handleClick('less')} >-</button>
<span className='spanPrice'>{qty}</span> 
<button className='cartButton' onClick={() => handleClick('more')}>+</button>
</div>
<div className='cartPrice'>
    <span className='totalPrice'>${Math.round(price * qty)}</span>
    </div>


</>

    )

}


export default Item;