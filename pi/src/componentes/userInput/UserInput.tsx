import React from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";

async function UserDataPost(){

    var userNomeInput = document.getElementById("userNome")  as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName")  as HTMLInputElement || null;
    var userPhoneNumberInput = document.getElementById("userPhoneNumber")  as HTMLInputElement || null;
    var userAddressInput = document.getElementById("userAddress") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail")  as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf")  as HTMLInputElement || null;
    var salesPersonUrl = "http://localhost:8080/api/vendedor";

    var userDataJson = {

        "nome": userNomeInput.value.toString(),
        "lastName": userLastNameInput.value.toString(),
        "phoneNumber": userPhoneNumberInput.value.toString(),
        "cpf": userCpfInput.value.toString(),
        "email": userEmailInput.value.toString(),
        "address": userAddressInput.value.toString()
        
    }


    await axios.post(salesPersonUrl, userDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}

function UserInput(){
    return(
        <>
        <Navbar/>
        <div className="UserInputMain">
            <div className="UserInputBody">
                <input type = "text" placeholder = "Nome" id = "userNome"/>
            </div>
            <div className="UserInputBody">
                <input type = "text" placeholder = "Sobrenome" id = "userLastName"/>
            </div>
            <div className="UserInputBody">
                <input type = "text" placeholder = "Endereço Completo" id = "userAddress"/>
            </div>
            <div className="UserInputBody">
                <input type = "text" placeholder = "Email" id = "userEmail"/>
            </div>
            <div className="UserInputLabel">
                <label>Número de Telefone:</label>
                <input type = "text" placeholder = "00 00000000000" id = "userPhoneNumber"/>
            </div>
            <div className="UserInputLabel">
                <label>CPF:</label>
                <input type = "text" placeholder = "000.000.000-00" id = "userCpf"/>
            </div>
            
            <button type = "submit" id="sendBtnPost" onClick={UserDataPost}>Post</button>
        </div>
        </>
    );
};

export default UserInput;