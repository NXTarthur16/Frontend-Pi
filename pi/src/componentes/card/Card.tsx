import React, { useEffect } from "react";
import "./Card.css";
import getSales from '../../componentes/services/api';

function Card(){
    useEffect(() => {
        var divId = document.getElementById("mainCard") as HTMLDivElement;
        console.log("divId dentro do componente: ", divId);
        getSales.getSales(divId);
    }, [])

    return (
        <div id="mainCard" className="mainCard">
        </div>
    );
}

export default Card;