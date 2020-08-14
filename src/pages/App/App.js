import React, { Component } from 'react';
import './App.css';
import Projects from '../../components/Projects/Projects';
import IntroCard from '../../components/IntroCard/IntroCard';
import MoreInfoCard from '../../components/MoreInfoCard/MoreInfoCard';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

class App extends Component {
  
  /*--- State ---*/


  /*--- Handle Methods ---*/


  /*--- Lifecycle Methods ---*/


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi, I'm Jason Hur</h2>
          <a href='#aboutMe'>About</a>
        </header>

        <IntroCard />
        <MoreInfoCard />

        <div className="Projects"><Projects /></div>

        <ContactInfo />
      </div>
    );
  }
}
export default App;
