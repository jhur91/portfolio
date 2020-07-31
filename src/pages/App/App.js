import React, { Component } from 'react';
import './App.css';
import Projects from '../../components/Projects/Projects';
import IntroCard from '../../components/IntroCard/IntroCard';

class App extends Component {
  
  /*--- State ---*/


  /*--- Handle Methods ---*/


  /*--- Lifecycle Methods ---*/


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi, I'm Jason Hur</h2>
        </header>
        
        <IntroCard />

        <div className="Projects"><Projects /></div>

        <footer> linkedin.com/in/jasonhur | github.com/jhur91 | jasonyhur@gmail.com | (805) 300 - 7818 <br></br></footer>
      </div>
    );
  }
}
export default App;
