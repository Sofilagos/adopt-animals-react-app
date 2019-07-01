import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (

      <header className='container-fluid'>
        <div className='col-12'>
          <div className='header'>
            <div className='navbar navbar-expand-lg navbar-light'>
              <img src='/assets/logo.png' href='#' onClick={this.props.goToHomeSection} alt='Pet center'></img>

              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>

                  <li className='nav-item active'>
                    <a className='nav-link' href='#' onClick={this.props.goToHomeSection}>Inicio <span className='sr-only'>(current)</span></a></li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#' onClick={this.props.goToAnimal}>Curiosidades <span className='sr-only'>(current)</span></a></li>

                  <li className='nav-item active'>
                    <a className='nav-link' href='#' onClick={this.props.goToNewAnimal}>Registrar animal <span className='sr-only'>(current)</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </header>

    );
  }
}
export default Header;
