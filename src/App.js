import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';




class App extends Component {

  state = {
    headerMessage: "Click an image to begin!",
    score:0,
    topScore:0,
    gameState:"beginning",
    guessedId:[]
};

updateGuessedId = (id) => {
  this.setState({
    guessedId: [...this.state.guessedId, id]
})
}

resetGame = () => {
  this.setState({score: 0})
  this.setState({guessedId:[]})
}

handleCorrectGuesses = (id) => {
    
    for (var i=0; i < this.state.guessedId.length; i++){
      if(id === this.state.guessedId[i]){
          this.setState({headerMessage: "You lose!"})
          this.setState({gameState:"game over."})
          this.resetGame();
          return;
      }
    }
    this.setState({headerMessage: "You guessed correctly!"})
      var scorePlusOne = this.state.score +1;
    this.setState({score: scorePlusOne})
        if(this.state.score >= this.state.topScore){
          this.setState({topScore: scorePlusOne})

          
        }
          return;
  
    

};

  render() {
    // const { score, topScore, headerMessage } = this.state;
    return (
      <div className="App">
          <Header score= {this.state.score} message= {this.state.headerMessage} topScore= {this.state.topScore}/>
          <Jumbotron/>
          <Game handleCorrectGuesses= {this.handleCorrectGuesses} gameState= {this.state.gameState} updateGuessedId= {this.updateGuessedId}/>
          <Footer/> 
      </div>
    );
  }
}

export default App;
