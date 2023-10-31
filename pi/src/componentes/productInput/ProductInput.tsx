import React from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";

async function ProductDataPost(){

    var productNameInput = document.getElementById("productName") as HTMLInputElement || null;
    var productPriceInput = document.getElementById("productPrice") as HTMLInputElement || null;
    var productColorInput = document.getElementById("productColor") as HTMLInputElement || null;
    var productDescriptionInput = document.getElementById("productDescription") as HTMLInputElement || null;
    var productQuantityInput = document.getElementById("productQuantity") as HTMLInputElement || null;
    var productImgInput = document.getElementById("productImg") as HTMLInputElement || null;
    var productUrl = "http://localhost:8080/api/produto";

    var productDataJson = {

        "pName": productNameInput.value.toString(),
        "pPrice": productPriceInput.value.toString(),
        "pColor": productColorInput.value.toString(),
        "pDescription": productDescriptionInput.value.toString(),
        "pQuantity": productQuantityInput.value.toString(),
        "img": productImgInput.value.toString()
    }

    await axios.post(productUrl, productDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}

function ProductInput(){
    return(
        <>
        <Navbar/>
        <div className="productInputMain">
            <div className="productInputBody">
                <input type = "text" placeholder="Nome do Produto" id = "productName"/>
            </div>
            <div className="productInputBody">
                <label>Preço do Produto</label>
                <input type = "text" id = "productPrice"/>
            </div>
            <div className="productInputBody">
                <label>Cor do Produto</label>
                <input type = "text" id = "productDescription"/>
            </div>
            <div className="productInputBody">
                <label>Descrição do Produto</label>
                <input type = "text" id = "productDescription"/>
            </div>
            <div className="productInputBody">
                <label>Quantidade do Produto</label>
                <input type = "text" id = "productQuantity"/>
            </div>
            <div className="productInputBody">
                <label>Foto do Produto</label>
                <input type = "text" id = "productImg"/>
            </div>
            <button type = "submit" id = "sendBtnPost" onClick={ProductDataPost}>Post</button>
        </div>
        </>
    )
}

export default ProductInput;