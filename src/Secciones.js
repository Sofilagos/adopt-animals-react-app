import React from 'react';
import './AnimalListItem.css';

class Secciones extends React.Component {
  render() {
    return (

      <div>
      <div className='Container-fluid-secciones'>
        <div className='row'>
          <div className='col col-auto'>
            <form action='url-to-server.php' method='post'>
              <select className='custom-select'>
                <option value=''>Tipo de animal</option>
                <option value='Perros'>Perros</option>
                <option value='Gatos'>Gatos</option>
              </select>
            </form>
          </div>

          <div className='col col-auto'>
            <form action='url-to-server.php' method='post'>
              <select className='custom-select'>
                <option value=''>Sexo</option>
                <option value='Macho'>Macho</option>
                <option value='Hembra'>Hembra</option>
              </select>
            </form>
          </div>

          <div className='col col-auto'>
            <form action='url-to-server.php' method='post'>
              <select className='custom-select'>
                <option value=''>Edad</option>
                <option value='Cachorro'>Cachorro</option>
                <option value='Adulto'>Adulto</option>
              </select>
            </form>
          </div>

        </div>
      </div>
    </div>
       

    );
  }
}
export default Secciones;

