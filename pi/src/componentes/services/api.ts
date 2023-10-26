import React from "react";
import axios from "axios";

async function getSalesperson(divId: HTMLDivElement){
    const salesPersonUrl = "http://localhost:8080/api/vendedor";

    await axios.get(salesPersonUrl)
    .then((response) => {
        const dataSalesPerson: Record<string, {name: string, lastName: string,
            phoneNumber: string, cpf: string, email: string, address: string}> = 
            response.data;

            // name vai conter a url da imagem
            // lastName vai conter o titulo
            // phoneNumber vai conter o subtitulo
            // ...

            const dataSalesPersonArray = Object.entries(dataSalesPerson).map(
                ([key, value]) => ({
                    key,
                    ...value
                }));

                var content ="";
                console.log(dataSalesPerson)
                dataSalesPersonArray.forEach((dados) => {
                content += `
                <div class"cards">
                   <div class="imagemInput">
                        <img src=${dados.name} alt="error"></img>
                    <div class="imagemShop">
                        <h4>Celular teste 1</h4>
                    <div class="play">
                        <img src=${dados.lastName} alt="error"/>
                        <div>shop store</div>
                        </div>
                    </div>
                </div>
                <div class="products">Produtos</div>
                    <div class="inputInCard">
                        <div class="cardImg">
                            <img src=${dados.phoneNumber} alt=""/>
                        </div>
                        <div class="cardText">
                            Celular teste 2
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

function postSalesperson(){
    console.log("teste")
}

export default { getSalesperson, postSalesperson }