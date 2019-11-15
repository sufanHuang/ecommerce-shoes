import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Accessories from './components/Accessories';
import BaseLayout from './components/BaseLayout';
import Men from './components/Men';
import Women from './components/Women';
import Products from './components/Products';
import Shoes from './components/Shoes';
import ShowProduct from './components/ShowProduct';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path ='/' component ={Home} />
              <Route exact path ='/products' component ={Products} />
              <Route exact path ='/products/:id' component ={ShowProduct} />
              <Route path ='/women' component ={Women} />
              <Route path ='/men' component ={Men} />
              <Route path ='/shoes' component ={Shoes} />
              <Route path ='/accessories' component ={Accessories} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
