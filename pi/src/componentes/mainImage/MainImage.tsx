import React from "react";
import "./MainImage.css";
import axios from "axios";

function MainImage() {
    return (
        <div>
            <div className="imagemInput">
                <img src="https://imgs.casasbahia.com.br/55064605/1g.jpg?imwidth=1000" alt=""></img>
                <div className="imagemShop">
                <h4>iPhone 15</h4>
                <div className="play">
                <img src="https://static.vecteezy.com/system/resources/previews/001/200/436/original/music-player-button-play-png.png" alt="" />
                <div>shop store</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MainImage;
