import React from 'react';
import './AnimalListItem.css';
import './Animal.css';

class Animal extends React.Component {
  render() {
    return (

      <section className="fondo">
        <div className="container-animal">
          <div className="row">`
            <div className="col col-10">
              <div className="row animal">
                <a style="padding-left: 60px">
                  <h3>La historia de Roco</h3> Deslizá para saber más sobre él
                </a>
                <div className="col col-12"><img src="assets/8.jpg" alt="Roco" style="padding: 50px;"></img></div>

                <div className="container-contacto">
                  <div className="col col-12 table">
                    <h3>Información del animal</h3>

                    <table>
                  <tbody>
                      <tr>
                        <th className="atributo">Tipo de animal</th>
                        <td className="valor">Perro</td>
                      </tr>
                      <tr>
                        <th className="atributo">Nombre</th>
                        <td className="valor">Roco</td>
                      </tr>
                      <tr>
                        <th className="atributo">Barrio</th>
                        <td className="valor">Malvin</td>
                      </tr>
                      <tr>
                        <th className="atributo">Raza</th>
                        <td className="valor">No tiene</td>
                      </tr>
                      <tr>
                        <th className="atributo">Sexo</th>
                        <td className="valor">Macho</td>
                      </tr>
                      <tr>
                        <th className="atributo">Edad</th>
                        <td className="valor">9 meses</td>
                      </tr>
                      <tr>
                        <th className="atributo">Color de pelo</th>
                        <td className="valor">Gris y marrón</td>
                      </tr>
                      <tr>
                        <th className="atributo">Color de ojos</th>
                        <td className="valor">Marrones</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="container-contacto">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="detalles">
                      <h2> Descripción</h2><br />
                      <p>Roco es un perro que ha pasado una mala experiencia, vino dolorido, triste y
                          desorientado.
                          Aún así agradecía cualquier caricia de los voluntarios, y buscaba amigablemente
                          a
                          los otros
                          perros. Los días que ha pasado en la casa de acogida se ha comportado de forma
                          tranquila y
                                educada. No se puede pedir más, es un perro perfecto.</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="detalles">
                      <h2>Datos del contacto </h2><br />
                      <p>
                        <b>Nombre:</b> Juan González <br />
                        <b>Departamento:</b> Montevideo <br />
                        <b>Ciudad:</b> Montevideo <br />
                        <b>Barrio:</b> Malvin <br />
                        <b>Dirección:</b> Michigan 2390 <br />
                        <b>Teléfono:</b> 098 123 456 <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
export default Animal;

