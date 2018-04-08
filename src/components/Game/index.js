// import React from "react";
import "./Game.css";
import React, { Component } from "react"; 
import ClickItem from "../ClickItem";



const itemDetails = [
        {
            id:1,
            src: "./assets/images/1.jpg",
        },
        {
            id:2,
            src: "./assets/images/2.jpg"
        },
        {
            id:3,
            src: "../assets/images/3.png"
        },
        {
            id:4,         
            src: "../assets/images/4.png"
        },
        {
            id:5,
            src: "../assets/images/5.png"
        },
        {
            id:6,
            src: "../assets/images/6.png"
        },
        {
            id:7,
            src: "../assets/images/7.png"
        },
        {
            id:8,
            src: "../assets/images/8.png"
        },
        {
            id:9,
            src: "../assets/images/9.png"
        },
        {
            id:10,
            src: "../assets/images/10.png"
        },
        {
            id:11,
            src: "../assets/images/11.png"
        },
        {
            id:12,
            src: "../assets/images/12.png"
        }


  ]

class Game extends Component {
    state= {ClickItemDetails:itemDetails}
   
    handleClick = (id) => {
        
        this.props.updateGuessedId(id);
        this.props.handleCorrectGuesses(id);
        this.shuffleArray();
    };
    

    renderClickItems = () => {
        return (
            this.state.ClickItemDetails.map((item, index) => <ClickItem src={item.src} key={index} id={item.id} onClick={(id) => this.handleClick(id)}/>)
        )
      }

        shuffleArray= () => {
        const details= this.state.ClickItemDetails;
        let i = details.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = details[i];
          details[i] = details[j];
          details[j] = temp;
        }
        this.setState({ClickItemDetails: details});
      }
      
    render(){
       
        return (
            <main>
                {this.renderClickItems()}
               
             
            </main>
        )
       
    }
}

export default Game;