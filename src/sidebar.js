import React from 'react';
import { slide as Menu } from 'react-burger-menu';


function menu()
/*export default props => */{
  return (
    <Menu>
      <a className="menu-item" href="/">
        Inicio
      </a>

      <a className="menu-item" href="/persa">
        Gato Persa
      </a>

      <a className="menu-item" href="/siames">
        Gato Siames
      </a>

      <a className="menu-item" href="/siberiano">
        Gato Siberiano
      </a>

      <a className="menu-item" href="/montes">
        Gato Montés
      </a>

      <a className="menu-item" href="/curlamericano">
        Gato Curl Americano
      </a>
    </Menu>
  );
};

export default menu;