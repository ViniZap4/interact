import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'

import Home from './page/Home'

export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}