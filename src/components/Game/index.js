// import React from "react";
import "./Game.css";
import React, { Component } from "react"; 
import ClickItem from "../ClickItem";
import imageOne from "/images/1.jpg";
import imageTwo from "/images/2.jpg"
import imageThree from "/images/3.png"
import imageFour from "/images/4.png"
import imageFive from "/images/5.png"
import imageSix from "/images/6.png"
import imageSevem from "/images/7.png"
import imageEight from "/images/8.png"
import imageNine from "/images/9.png"
import imageTen from "/images/10.png"
import imageEleven from "/images/11.png"
import imageTwelve from "/images/12.png"


const itemDetails = [
        {
            id:1,
            src: imageOne,
        },
        {
            id:2,
            src: imageTwo,
        },
        {
            id:3,
            src: imageThree,
        },
        {
            id:4,         
            src: imageFour,
        },
        {
            id:5,
            src: imageFive,
        },
        {
            id:6,
            src: imageSix,
        },
        {
            id:7,
            src: imageSeven,
        },
        {
            id:8,
            src: imageEight,
        },
        {
            id:9,
            src: imageNine,
        },
        {
            id:10,
            src: imageTen,
        },
        {
            id:11,
            src: imageEleven,
        },
        {
            id:12,
            src: imageTwelve
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