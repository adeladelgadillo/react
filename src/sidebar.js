import React from 'react';
import { slide as Menu } from 'react-burger-menu';


function menu()
/*export default props => */{
  return (
    <Menu>
      <a className="menu-item" href="/">
        Inicio
      </a>

      <a className="menu-item" href="/ej1">
        Gatito2
      </a>

      <a className="menu-item" href="/ej2">
        Gatito3
      </a>

      <a className="menu-item" href="/ej3">
        Gatito4
      </a>

      <a className="menu-item" href="/ej4">
        Gatito5
      </a>

      <a className="menu-item" href="/ej5">
        Gatito6
      </a>
    </Menu>
  );
};

export default menu;