import React from 'react';
import './AnimalListItem.css';  

class AnimalListItem extends React.Component {
  render() {
    return (

      <div>
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img className="card-img-top" src="assets/1.jpg" alt="Mascotas"></img>
                <div className="card-body">
                  <p className="card-text"><b>Laki</b><br />Hembra, 5 meses</p>
                  <a className="btn btn-primary" href="Animal.html">Adoptar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AnimalListItem;

