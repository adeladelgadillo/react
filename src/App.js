import './App.css';
import React from 'react';
import SideBar from './sidebar';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home.js'
import Primero from './views/Primero.js'
import Segundo from './views/Segundo.js'
import Tercero from './views/Tercero.js'
import Cuarto from './views/Cuarto.js'
import Quinto from './views/Quinto'


function App() {
  return (
    <BrowserRouter>
  
<div className="App">
<SideBar/>
      <div id="page-wrap">
        <h1>Ejemplo</h1>
      </div>

<Routes>
<Route exact path="/" element={<Home /> } />
<Route exact path="/persa" element={<Primero /> } />
<Route exact path="/siames" element={<Segundo /> } />
<Route exact path="/siberiano" element={<Tercero /> } />
<Route exact path="/montes" element={<Cuarto /> } />
<Route exact path="/curlamericano" element={<Quinto /> } />

  </Routes>


    </div>



    </BrowserRouter>
     
  );
}

export default App;
