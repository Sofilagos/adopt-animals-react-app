import React from 'react';
import './App.css';
import './Header.js';
import './NewAnimal.css';


class NewAnimal extends React.Component {
  render() {
    return (

      <div>
        <section className="form">
          <a><h3>Información del animal</h3></a><br />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="text"><b>Tipo de animal</b></label>
                <input type="text" className="form-control" id="tipo de animal" placeholder="Perro"></input>
              </div>
              <div className="form-group col-md-6">
                <label for="text"><b>Nombre</b></label>
                <input type="text" className="form-control" id="Nombre" placeholder="Si aún no tiene poner no"></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="sexo"><b>Sexo</b></label>
                <select id="sexo" className="form-control">
                  <option selected>Elegir</option>
                  <option>Hembra</option>
                  <option>Macho</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="inputAddress"><b>Raza</b></label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Golden"></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputAddress2"><b>Edad</b></label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="3 meses"></input>
              </div>
              <div className="form-group col-md-4">
                <label for="inputZip"><b>Color de pelo</b></label>
                <input type="text" className="form-control" id="inputZip"></input>
              </div>
              <div className="form-group col-md-4">
                <label for="inputZip"><b>Color de ojos</b></label>
                <input type="text" className="form-control" id="inputZip"></input>
              </div>
              <div className="form-group">
                <label for="foto del animal"><b>Foto del animal</b></label>
                <input type="file" className="form-control-file" id="foto del animal"></input>
              </div>
            </div><br />

            <div>
              <h3>Información personal</h3>
            </div>
            <br />

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="text"><b>Nombre</b></label>
                <input type="text" className="form-control" id="nombre" placeholder="Juan"></input>
              </div>
              <div className="form-group col-md-6">
                <label for="text"><b>Apellido</b></label>
                <input type="text" className="form-control" id="Apellido" placeholder="Pérez"></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="text"><b>Departamento</b></label>
                <select className="form-control" id="Dpto">
                  <option selected>Elegir</option>
                  <option>Artigas</option>
                  <option>Salto</option>
                  <option>Pasysandú</option>
                  <option>Río Negro</option>
                  <option>Soriano</option>
                  <option>Colonia</option>
                  <option>Flores</option>
                  <option>Florida</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="text"><b>Ciudad</b></label>
                <input type="text" className="form-control" id="tipo de animal" placeholder=""></input>
              </div>
              <div className="form-group col-md-4">
                <label for="text"><b>Barrio</b></label>
                <input type="text" className="form-control" id="Nombre" placeholder=""></input>
              </div>

            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label for="text"><b>Dirección</b></label>
                <input type="text" className="form-control" id="direccion" placeholder="Rivera 2222"></input>
              </div>
              <div className="form-group col-md-6">
                <label for="number"><b>Teléfono</b></label>
                <input type="number" className="form-control" id="Nombre" placeholder="099 111 111"></input>
              </div>
              <div className="form-group col-md-6">
                <label for="Email"><b>Email</b></label>
                <input type="email" className="form-control" id="email" placeholder="juan@ejemplo.com"></input>
              </div>

            </div><br />


            <button type="submit" className="btn btn-primary 2">Enviar</button>
          </form>
        </section>
      </div>
    );
  }
}
export default NewAnimal;

