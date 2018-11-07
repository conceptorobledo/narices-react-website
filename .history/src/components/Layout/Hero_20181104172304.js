import React from 'react';
import './Hero.css';

const hero = () => {
    return (
        <section id="Hero" className="vertical-center">
            <div className="container">
                <div className="row">
                    <div className="col left">
                        <div className="justify-content-center align-items-center">
                            <h1>Hablemos de <b>animales</b></h1>
                            <p>Un podcast con historias que inspiran.  </p>
                        </div>
                    </div>
                    <div className="col background-png h-100">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;