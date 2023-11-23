import React from "react";
import axios from "axios";
import "./UserInput.css";
import Navbar from "../navbar/Navbar";

async function UserDataPost(){

    var userNomeInput = document.getElementById("userNome")  as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName")  as HTMLInputElement || null;
    var userAgeInput = document.getElementById("userAge")  as HTMLInputElement || null;
    var userAddressInput = document.getElementById("userAddress") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail")  as HTMLInputElement || null;
    var userPasswordInput = document.getElementById("userSenha")  as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf")  as HTMLInputElement || null;
    var salesPersonUrl = "http://localhost:8090/api/users";

    var userDataJson = {

        "nome": userNomeInput.value.toString(),
        "lastName": userLastNameInput.value.toString(),
        "age": userAgeInput.value.toString(),
        "address": userAddressInput.value.toString(),
        "email": userEmailInput.value.toString(),
        "Senha": userPasswordInput.value.toString(),
        "cpf": userCpfInput.value.toString()
        
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
        <div className='container-size'>
            <div className='container-user'>
                <div className='register-user'>
                    <h1>Cadastro de Usuários</h1>
                </div>

                <div className='form-user'>
                    <div className='style-u'>
                        <input type="text" placeholder='Nome do Usuário' id="userNome" />
                        <input type="text" placeholder='SobreNome' id="userLastName"  />
                    </div>

                    <div className='style-u'>
                        <input type="text" placeholder='Idade' id="userAge" />
                        <input type="text" placeholder='Endereço' id="userAddress" /> 
                    </div>

                    <div className='style-x'>
                        <input type="text" placeholder='Email' id="userEmail" />
                    </div>

                    <div className='style-u'>
                        <input type='text' placeholder='CPF' id="userSenha" />
                        <input type="text" placeholder='Senha' id="userCpf" />
                    </div>
                </div>

                <div className='btn-user'>

                <button type = "submit" id="sendBtnPost" onClick={UserDataPost}>Post</button>
                </div>
            </div>

        </div>
        </>
    );
};

export default UserInput;