import React from "react"
import './style.scss'


function Navbar({handleCallback, Buttonback}) {
  
function handleChange(e) {
  handleCallback(e.target.value);
  

  
}

function handleClick(e) {
  if(e.keyCode == 13) {
    
    Buttonback()
    

  }
  
}

 return (

    <>
    <div className='inputWrapper'>
      <div>
        
      </div>
    <div className='inputNav'>
    <img className='logo' src='https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small.png?v=3.0'/>
    <input  placeholder="Buscar productos,marcas y mas.." className='find' type="text" onKeyDown={(e) => handleClick(e)} onChange={handleChange}/>
    <button className='search' onClick={handleClick} > Buscar </button>
    </div>
  


    </div>
    </>

  )
}

export default Navbar;