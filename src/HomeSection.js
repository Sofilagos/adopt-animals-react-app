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
       {animals}

     </div>
   );
 }
}

export default HomeSection;