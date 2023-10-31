import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className = "navbarHomePai">
                <Link to = {'/home'} className = "navbarHome">
                    Home
                </Link>
                </div>
                <Link to = {'/products'} className = "navbarChild">
                    Cadastro de Produtos
                </Link>
                <Link to = {'/users'} className = "navbarChild">
                    Cadastro de Usuários
                </Link>
                <Link to = {'/salesperson'} className = "navbarChild">
                    Cadastro de Vendas 
                </Link>
        </div>
    );
};

export default Navbar;