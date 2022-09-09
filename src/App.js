import './App.css';
import React from 'react';
import SideBar from './sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home.js'

function App() {
  return (
    <BrowserRouter>
  
<div className="App">
<Routes>
<Route exact path="/" component={Home} />
  </Routes>


    </div>

    <SideBar/>
      <div id="page-wrap">
        <h1>Ejemplo</h1>
        <h2>Hola !¿!¿!!¿!¿¿!</h2>
      </div>

    </BrowserRouter>
  );
}

export default App;
