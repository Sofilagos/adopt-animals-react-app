import React from 'react';
import './App.css';
import './HomeSection.css';
import AnimalListItem from './AnimalListItem.js';

class HomeSection extends React.Component {

  state = {
    animals: [

    ]
  }

  componentDidMount() {
    const animals = '/json/animals.json';

    fetch(animals).then(function (response) {
      return response.text();
    })
      .then(data => {
        let jsonData = JSON.parse(data);
        this.setState({
          animals: jsonData
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  render() {

    let animals = this.state.animals.map(function (animal) {
      return <AnimalListItem data={animal} />
    });

    return (
      <div>
        <div className="container">
          <div className="row">

            <div className="col-3">
              <div className="row-categorias">
                <ul className="list-group list-group-flush">

                  <li className="list-group-item"><b>Tipo de animal</b>
                    <form action='url-to-server.php' method='post'>
                      <select className='custom-select'>
                        <option value=''>Elegir</option>
                        <option value='Perros'>Perros</option>
                        <option value='Gatos'>Gatos</option>
                      </select>
                    </form>
                  </li>
                  <li className="list-group-item"><b>Raza</b>
                    <form action='url-to-server.php' method='post'>
                      <select className='custom-select'>
                        <option value=''>Elegir</option>
                        <option value='Perros'>Perros</option>
                        <option value='Gatos'>Gatos</option>
                      </select>
                    </form>
                  </li>

                  <li className="list-group-item"><b>Sexo</b>
                  <form action='url-to-server.php' method='post'>
                      <select className='custom-select'>
                        <option value=''>Elegir</option>
                        <option value='Perros'>Macho</option>
                        <option value='Gatos'>Hembra</option>
                      </select>
                    </form>
                  </li>
                  <li className="list-group-item"><b>Edad</b>
                  <form action='url-to-server.php' method='post'>
                      <select className='custom-select'>
                        <option value=''>Elegir</option>
                        <option value='Cachorro'>Cachorro</option>
                        <option value='Adulto'>Adulto</option>
                      </select>
                    </form>
                  </li>
                  <li className="list-group-item"><b>Barrio</b>
                  <form action='url-to-server.php' method='post'>
                      <select className='custom-select'>
                        <option value=''>Elegir</option>
                        <option value='Pocitos'>Pocitos</option>
                        <option value='Parque rodó'>Parque rodó</option>
                        <option value='Malvin'>Malvin</option>
                        <option value='Buceo'>Buceo</option>
                        <option value='Cordón'>Cordón</option>
                        <option value='Centro'>Centro</option>
                        <option value='Aguada'>Aguada</option>
                      </select>
                    </form></li>
                </ul>
                <div className="col"></div>
              </div>
            </div>


            <div className="col-9">
              <div className="row">

                {animals}

              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default HomeSection;