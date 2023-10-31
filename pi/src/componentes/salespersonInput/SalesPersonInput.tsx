import React from 'react';
import "./SalesPersonInput.css";
import axios from 'axios';
import Navbar from '../navbar/Navbar';

async function SalesPersonDataPost(){

    var salesPersonNameInput = document.getElementById("salesPersonName")  as HTMLInputElement || null;
    var salesPersonLastNameInput = document.getElementById("salesPersonLastName")  as HTMLInputElement || null;
    var salesPersonPhoneNumberInput = document.getElementById("salesPersonPhoneNumber")  as HTMLInputElement || null;
    var salesPersonAddressInput = document.getElementById("salesPersonAddress") as HTMLInputElement || null;
    var salesPersonEmailInput = document.getElementById("salesPersonEmail")  as HTMLInputElement || null;
    var salesPersonCpfInput = document.getElementById("salesPersonCpf")  as HTMLInputElement || null;
    var salesPersonUrl = "http://localhost:8080/api/vendedor";

    var salesPersonDataJson = {

        "name": salesPersonNameInput.value.toString(),
        "lastName": salesPersonLastNameInput.value.toString(),
        "phoneNumber": salesPersonPhoneNumberInput.value.toString(),
        "cpf": salesPersonCpfInput.value.toString(),
        "email": salesPersonEmailInput.value.toString(),
        "address": salesPersonAddressInput.value.toString()
        
    }

    await axios.post(salesPersonUrl, salesPersonDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}

function SalesPersonInput(){
    return(
        <>
        <Navbar/>
        <div className="SalesPersonInputMain">
            <div className="SalesPersonInputBody">
                <label>Nome: </label>
                <input type = "text" id = "salesPersonName"/>
            </div>
            <div className="SalesPersonInputBody">
                <label>Sobrenome: </label>
                <input type = "text" id = "salesPersonLastName"/>
            </div>
            <div className="SalesPersonInputBody">
                <label>Número de telefone: </label>
                <input type = "text" id = "salesPersonPhoneNumber"/>
            </div>
            <div className="SalesPersonInputBody">
                <label>Endereço: </label>
                <input type = "text" id = "salesPersonAddress"/>
            </div>
            <div className="SalesPersonInputBody">
                <label>Email: </label>
                <input type = "text" id = "salesPersonEmail"/>
            </div>
            <div className="SalesPersonInputBody">
                <label>CPF: </label>
                <input type = "text" id = "salesPersonCpf"/>
            </div>
            <button type = "submit" id="sendBtnPost" onClick={SalesPersonDataPost}>Post</button>
        </div>
        </>
    );
};

export default SalesPersonInput;