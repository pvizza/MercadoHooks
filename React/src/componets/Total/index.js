import React from 'react'
import './style.scss'

function Total({total}) {
  return (

    <>
    <div className='totalCart'>

      <span>Total:$</span> <span>{total}</span>
      

    </div>


    </>


  )
}

export default Total;