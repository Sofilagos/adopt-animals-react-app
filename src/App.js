import React from 'react';
import './App.css';
import './Header.css';
import Header from   './Header.js';
import Footer from './Footer.js';
import NewAnimal from './NewAnimal';
import HomeSection from './HomeSection.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'home',
    };
  }

  renderCurrentSection() {
    switch (this.state.currentSection) {
      case 'home':
        return (
          <HomeSection products={this.state.userProducts}
          />
        );
      case 'newAnimal':
      default:
        return <NewAnimal />;
    }
  }

  

    render() {
      return (
        <div>
          <Header />

          <main>
            {this.renderCurrentSection()}
          </main>

          <Footer />
        </div>
      );
    }



  }



  export default App;
