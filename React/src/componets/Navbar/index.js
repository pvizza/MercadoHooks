import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar({handleCallback, Buttonback}) {
  
function handleChange(e) {
  handleCallback(e.target.value);
  

  
}

function handleClick(e) {
  if(e.keyCode == 13) {
    
    Buttonback()
    
  }

  }

 function handleSearch() {

  Buttonback()

 } 

 return (

    <>
    <div className='inputWrapper'>
    <div className='inputNav'>
    <img className='logo' src='https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small.png?v=3.0'/>
    <input  placeholder="Buscar productos,marcas y mas.." className='find' type="text" onKeyDown={(e) => handleClick(e)} onChange={handleChange}/>
    <a ><FontAwesomeIcon className='svgIcon' onClick={handleSearch} icon={faSearch} /></a>
    </div>
  


    </div>
    </>

  )
}

export default Navbar;