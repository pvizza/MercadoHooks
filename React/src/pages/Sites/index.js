import React, { useEffect, useState} from 'react';
import Products from "../../componets/Products";
import {useParams} from "react-router-dom"
import Navbar from "../../componets/Navbar"
import './style.scss'


function Sites() {
  const [items , setItems] = useState([]);
  const {site} = useParams();
  const [inputValue, setInputValue] = useState("")
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  
 
  useEffect(() => {
  
      async function fetchData() {
      setLoading(true)
      const data = await fetch (`https://api.mercadolibre.com/sites/${site}/search?q=${inputValue}&limit=10`);
      const Json = await data.json();
  
      
      setItems(Json.results)
      setLoading(false)
      
      
    }
    
    
     fetchData(); 


  }, [search] ); 
  



function handleClick() {
  setModal(!modal)
  
  
  
}    
    

function handleCallback(call) {
  setInputValue(call)
  
}

function handleButton () {

  setSearch(inputValue)  

}


  return (

    <>
     
    <Navbar handleCallback={handleCallback}  Buttonback={handleButton}/>


    <div className='main'>
     <div className='tagsProduct'>
      <h2>Producto</h2>
      <h3>Ordenar publicaciones</h3>
      { !modal ? 
     <button className="prime" onClick={handleClick}>Mas relevantes👇🏻{modal}</button>
      : <div><button className="prime" onClick={handleClick}>Mas relevantes☝🏻{modal}</button> <div className='modal'><p>Mas relevantes</p> <p>Menor precio</p> <p>Mayor precio</p></div> </div>
      }    
    
      <h3>Categorias</h3>
      <h3>Ubicacion</h3>
      

      </div> 
 
    <div className='productWrapper'>
    
     
      {loading ? ( <p>Cargando</p>) :   

        items.filter((item) => {
        return (item.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      }).map((item, key) => {
        return (
        
          <Products key={key} product={item.id} item={item.title} img={item.thumbnail} price={item.price}/>
        
        )
      })
      }

      
 

        </div>
        </div>    
    </>


  )
}
export default Sites;