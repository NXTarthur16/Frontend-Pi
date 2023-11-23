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
    var productUrl = "http://localhost:8080/api/products";

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
                <input type = "text" placeholder = "Preço do Produto" id = "productPrice"/>
            </div>
            <div className="productInputBody">
                <input type = "text" placeholder = "Cor do Produto" id = "productColor"/>
            </div>
            <div className="productInputBody">
                <input type = "text" placeholder="Descrição do Produto" id = "productDescription"/>
            </div>
            <div className="productInputBody">
                <input type = "text" placeholder = "Quantidade do Produto" id = "productQuantity"/>
            </div>
            <div className="productInputBody">
                <input type = "text" placeholder = "Link Imagem do Produto" id = "productImg"/>
            </div>
            <button type = "submit" id = "sendBtnPost" onClick={ProductDataPost}>Post</button>
        </div>
        </>
    )
}

export default ProductInput;