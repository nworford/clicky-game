import React from "react";
import "./Jumbotron.css";
import BackgrounImage from "./cover.jpg";
const Jumbotron = () => (
    <div id="background" style= {{backgroundImage:`url(${ BackgrounImage})`}}>
        <div className="jumbotron">
            <h1>Clicky Game</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    </div> //background
)

export default Jumbotron;

