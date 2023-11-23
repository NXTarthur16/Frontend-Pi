import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){

    // useEffect(() => {
        var endereco = document.location.href.split("/")[4];
        console.log(endereco)

        // divProducts.classList.add("");
        // divUsers.classList.add("");
        // divSales.classList.add("");
        // divHome.classList.add("");

    //     if (endereco == "products"){
    //         var divProducts = document.getElementById("products") as HTMLDivElement;
    //         divProducts.classList.add("disableLink");
    //     }else if(endereco == "users"){
    //         var divUsers = document.getElementById("users") as HTMLDivElement;
    //         divUsers.classList.add("disableLink");
    //     }else if(endereco == "sales"){
    //         var divSales = document.getElementById("sales") as HTMLDivElement;
    //         divSales.classList.add("disableLink");
    //     }else{
    //         var divHome = document.getElementById("home") as HTMLDivElement;
    //         divHome.classList.add("disableLink");
    //     }
    // })

    return(
        <div className="navbar">
                {endereco === 'home' ? (<Link to = {'/home'} className = "disableLink">
                    Home
                </Link>) :
                (<Link to = '/' >Home</Link>)}
                
                {endereco === 'products' ? (<Link to = {'/products'} className="disableLink">
                    Cadastro de Produtos
                </Link>) :
                (<Link to = '/products' >Cadastro de Produtos</Link>)}

                {endereco === 'users' ? (<Link to = {'/users'} className="disableLink">
                    Cadastro de Usuarios
                </Link>) :
                (<Link to = '/users' >Cadastro de Usuarios</Link>)}

                {endereco === 'sales' ? (<Link to = {'/sales'} className="disableLink">
                    Cadastro de Vendas
                </Link>) :
                (<Link to = '/sales' >Cadastro de Vendas</Link>)}
                
        </div>
    );
};

export default Navbar;