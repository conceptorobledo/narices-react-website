import React from 'react';

import './Navbar.css'

const navbar = () => {
    return (
        <div className="container Navbar">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand order-md-0" href="#"> <img src="logo.png" alt="Narices Humedas - Podcast de animales" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Podcast</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default navbar;