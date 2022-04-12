import React from "react";
import './Header.css';

export default ({black}) => {

    return (

        <header className={ black ? "header--black" : '' }>
                <div className="header--logo">
                    <a href="#">
                        <img src="/images/netflix-logo-5.png" alt="logo" width={100}></img>
                    </a>
                </div>
                <div className="header--menu">
                    <a href="#">Início</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Bombando</a>
                    <a href="#">Minha lista</a>
                </div>
                <div className="header--profile">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" width={30}></img>
                </div>
        </header>


    )







}