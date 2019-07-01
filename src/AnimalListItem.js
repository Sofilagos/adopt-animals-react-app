import React from 'react';
import './AnimalListItem.css';

class AnimalListItem extends React.Component {
  render() {
    return (

        <div className="col col-md-4 col-sm-6 col-xs-12">
            <div className="card">
              <img className="card-img-top" src={this.props.data.foto} alt="Mascotas"></img>
              <div className="card-body">
                <p className="card-text"><b>{this.props.data.nombre}</b></p>
                <p className="card-text">{this.props.data.sexo + ", " + this.props.data.edad}</p>
                <a className="btn btn-primary" href="#" onClick={this.props.goToAnimal}>Adoptar</a>
              </div>
          </div>
        </div>


    );
  }
}
export default AnimalListItem;

