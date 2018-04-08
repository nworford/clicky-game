import React from "react";
import "./Header.css";


const Header = (props) => (
    <header>
        <h2>Clicky Game</h2>
        <h2>{props.message}</h2>
        <h2>Score:{props.score}</h2>
        <h2>Top Score:{props.topScore}</h2>
    </header>
)

export default Header;

