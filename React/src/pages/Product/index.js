import React from 'react'
import './style.scss'
import ReactMarkdown from 'react-markdown'
import Navbar from '../../componets/Navbar'
import axios from 'axios'




class Product extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      price: '',
      condition: '',
      img: null,
      pictures: [],
      sold: '',
      available_quantity: '',
      description: '',
      attributes: [],
      mouse:false,
      ser: [],
      inputValue:''
    
    };


  }




  async componentDidMount() {

    const { id } = this.props.match.params
    
    

    const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const info = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
    const Json = await info.json();
    const json = await data.json();
    

    this.setState({
      title: json.title,
      price: json.price,
      img: json.thumbnail,
      pictures: json.pictures,
      sold: json.sold_quantity,
      condition: json.condition,
      available_quantity: json.available_quantity,
      description: Json.plain_text,
      attributes: json.attributes,
      

    })

  }

  async clickBuy(title,price) {
   
    

    try {
      
      const ax = await axios({
        method:"POST",
        headers:{
          'Content-type': 'application/json', 
        },
        url:"http://localhost:4000/checkout",
  
        data: {
          title:title,
          price:price,
          quantity: 1
        }
        
      });
    } catch(err) {
      console.log(err)
      
    }
   
    }


  Click(title, price, poc) {

    const cart = 'cart'


    const stringifiedCart = localStorage.getItem(`${cart}`)
    if (stringifiedCart) {
      const parseCart = JSON.parse(stringifiedCart)
      parseCart.push({ title, price, poc })
      const newCart = JSON.stringify(parseCart)
      localStorage.setItem(`${cart}`, newCart)
    }
    else {
      const parseCart = [{ title, price, poc }]
      const newCart = JSON.stringify(parseCart)
      localStorage.setItem(`${cart}`, newCart)
    }
    this.props.history.push('/Cart')

  }

  handleOver() {

    this.setState({
      mouse:true
      
    })
    
  }

    handleCallback(call) {
    

    this.setState({
    

      inputValue: call
}
    )
  }
  
    handleButton() {

      const {inputValue} = this.state
    
    
      
    
  
  }




  render() {
    const { title, price, pictures, sold, condition, available_quantity, description, attributes,mouse } = this.state
    const attr = attributes.slice(0, 4)
    const poc = pictures.slice(0, 1)


    return (
      <>

        <Navbar handleCallback={(call) =>  this.handleCallback(call)} Buttonback={() => this.handleButton()} />

        <div className='itemMain'>
          <div className='itemWrapper'>
            <div className='initialInfo'>
              <div className='itemPics'>

                <ul className='ulPic'>

                  {poc.map((pic, key) => {

                    return (

                      <div key={key} onMouseOver={() => this.handleOver()} className='gpic'>

                        {<img className='pic' src={pic.url} />}

                      </div>

                    )
                  })}



                </ul>

                <div className='max'>

                  {mouse && poc.map((pic, key) => {
                    return (

                      <>
                    <div key={key}>
                     {<img className='maxPic'  src={pic.url} />}
                     </div>   
                      </>

                    )
                  })}



                </div>



              </div>
              <div className='itemInf'>
                <p className='condition'> {condition} | {sold} vendidos </p>
                <p className='itemTitle'>{title}</p>
                <p className='itemPrice'>$  {price}</p>
                <p className='itemCuote'>Paga hasta en 12 cuotas de ${Math.round(price / 12)}</p>
                {price <= 2499 ? <p> Costo de envio </p> : <p className='itemSend'>Envio gratis</p>}
                <p className='itemCuote' >stock disponible</p>
                <p className='itemCuote'>Cantidad:({available_quantity} disponibles)</p>

                <button className='buy Button' onClick={() => this.clickBuy(title,price)} >Comprar ahora</button>
                <button onClick={() => this.Click(title, price, poc)} className='cart Button'>Agregar al carrito</button>
              </div>
            </div>


            <div className='attributes'>

              <h3>Caracteristicas principales</h3>
              <table className='atr'>
                {attr.map((atr) => {
                  return (
                    
                    
                    <tbody key={atr.id}>
                    
                      <tr className='tr'><th className='th' ><span >{atr.name}</span></th><td className='td'><span>{atr.value_name}</span></td></tr>
                      </tbody>
                     
                    
                    

                  )
                })}
              </table>
            </div>
            <div className='description'>

              <h4>Descripcion</h4>

              <ReactMarkdown className='descPro'>{description}</ReactMarkdown>

            </div>



          </div>





        </div>



      </>
    )
  }
}

export default Product