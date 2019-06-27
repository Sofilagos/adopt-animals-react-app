import React from 'react';
import './Header.css';

class Header extends React.Component {
 render() {
  return (
    
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a>Pet Center</a>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a></li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Curiosidades <span className="sr-only">(current)</span></a></li>
           

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Animales</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Raza</a>
                <a className="dropdown-item" href="#">Cachorros</a>
                <a className="dropdown-item" href="#">Adultos</a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Registrar animal <span className="sr-only">(current)</span></a></li> 
          </ul>
        </div>
    </header>

  );
}
}
export default Header;
