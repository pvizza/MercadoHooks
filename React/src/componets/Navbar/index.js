import React,{useState,useEffect} from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import Cookies from "js-cookie"

function Navbar({handleCallback, Buttonback}) {
  const [logged,setLogged] = useState(null)

    useEffect(() => {
    const read = Cookies.get('user')
    
    if (read) {
      setLogged(true)
    }
      
     
  },[])

function handleChange(e) {

    handleCallback(e.target.value);
  }

function handleLogout() {
  setLogged(false)
  Cookies.remove("user", {path:'/'})
}

function handleClick(e) {
  if(e.keyCode === 13) {
    
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
   <Link to='/mercadohooks'><img className='logo' alt="mercadolibre logo" src='https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small.png?v=3.0'/></Link> 
    <input  placeholder="Buscar productos,marcas y mas.." className='find' type="text" onKeyDown={(e) => handleClick(e)} onChange={handleChange}/>
     <FontAwesomeIcon className='svgIcon' onClick={handleSearch} icon={faSearch}/>
    </div>

    <div className='login'>
      {logged ? <> <button className='logout' onClick={handleLogout}>Salir</button>  <Link to="/cart"><FontAwesomeIcon className='cartIcon' icon={faShoppingCart}/> </Link> </> : <Link to='/login'><span>ingresar</span> </Link>}
      
    </div>


    </div>
    </>

  )
}

export default Navbar;