import React from 'react';
import sites from '../../../src/data/sites.json'
import './style.scss'
import {Link} from 'react-router-dom'

function Home(){

  return (
      <>
      <div className='wrapper'>

      <div className='imgContent'> <img alt="link page" src='https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small.png?v=3.0'/>
      </div>
      <div className='map'>
          {sites.map((site, key) => {
            return (
              <div className='countries' key={key}>
                <ul>
             <Link to={`/Sites/${site.location}`}>   
              {site.name} </Link>
              </ul>
              </div>
            )
          })}
        </div>

      </div>


      </>
  )
}

export default Home;