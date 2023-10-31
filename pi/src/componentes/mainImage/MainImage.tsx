import React from "react";
import "./MainImage.css";
import iPhone from '../../img/iPhone.webp'
import play from '../../img/play.webp'

function MainImage() {
    return (
        <div>
            <div className= "cards">
                   <div className= "imagemInput">
                        <img src= {iPhone} alt="error"></img>
                    <div className="imagemShop">
                        <h4>Celular teste 1</h4>
                    <div className="play">
                        <img src= {play} alt="error"/>
                        <div>shop store</div>
                        </div>
                    </div>
                </div>
                <div className="products">Produtos</div>
            </div>
        </div>
    );
}

export default MainImage;
