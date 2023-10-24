import React from "react";
import "./Navbar.css";

function Navbar(){
    return(
            <div className="navbar">
                <div className="home">
                    Home 
                </div>
                <div>
                    Cadastro de Produtos
                </div>
                <div>
                    Cadastro de Usuários
                </div>
                <div>
                    Cadastro de Vendas
                </div>
            </div>
    );
};

export default Navbar;