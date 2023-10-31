import React from "react";
import axios from "axios";

async function getSales(divId: HTMLDivElement){
    const salesUrl = "http://localhost:8080/api/vendas";

    await axios.get(salesUrl)
    .then((response) => {
        const dataSales: Record<string, {image: String, titulo: String, subtitulo: String}> = 
            response.data;

            // name vai conter a url da imagem
            // lastName vai conter o titulo
            // phoneNumber vai conter o subtitulo
            // ...

            const dataSalesArray = Object.entries(dataSales).map(
                ([key, value]) => ({
                    key,
                    ...value
                }));

                var content ="";
                console.log(dataSales)
                dataSalesArray.forEach((dados) => {
                content += `
                    <div class="inputCard">
                        <div class="cardImg">
                            <img src=${dados.image} alt=""/>
                        </div>
                        <div class="cardTitulo">
                            ${dados.titulo}
                        </div>
                        <div class="cardSubtitulo">
                            ${dados.subtitulo}
                        </div>
                    </div>
                </div>
            `;
        })
                divId.innerHTML = content;
    })
    .catch((error) => {
        console.log("O erro ocorrido foi: ", error)
    })
}

function postSales(){
    console.log("teste")
}

export default { getSales, postSales }