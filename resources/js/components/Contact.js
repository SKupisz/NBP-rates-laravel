import React from "react";
import ReactDOM from "react-dom";

import MainParticles from "./Particles.jsx";

export default class ContactBlade extends React.Component{
    render(){
        return(
            <section className="main">
                <MainParticles/>
                <div className="main-nav" id = "main-nav"></div>
                <header className="welcome-header">Contact</header>
                <div className="contacts">
                    <div className="contact-way">Email: szym-ku@wp.pl</div>
                    <div className="contact-way">Facebook: SGK-news</div>
                </div>
            </section>
        );
    }
}

if(document.getElementById("contact-container")){
    const component = document.getElementById("contact-container");
    const props = Object.assign({},component.dataset);

    ReactDOM.render(<ContactBlade {...props}/>,component);
}