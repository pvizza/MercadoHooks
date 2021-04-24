import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'
import Sites from './pages/Sites'
import Product from './pages/Product'
import Cart from './pages/Cart'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom';



ReactDOM.render(
  <Router>
    
    <Route exact path='/mercadoHooks' component={Home} />
    <Route exact path='/Sites/:site' component={Sites} />
    <Route exact path='/product/:id' component={Product} />
    <Route exact path='/cart/' component={Cart} />
    <Route exact path='/login/' component={Login}/>
    <Route exact path='/create/' component={CreateAccount}/>
    
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
