import React from "react";
import ReactDOM from "react-dom";

import MainParticles from "./Particles.jsx";

export default class WelcomeView extends React.Component{
    render(){
        return(
            <section className="app">
                <MainParticles/>
                <div className="navbar-container" id = "main-nav"> 

                </div>
                <header className="welcome-header">Welcome to NBP-rates</header>
                <div className="short-describe left">
                    <header className="describe-header">What is NBP-rates?</header>
                    <section className="describe-content">It's a simple currency app made with the API of the National Bank of Poland (<a href="https://api.nbp.pl/" target="_blank" rel="noopener noreferrer">https://api.nbp.pl/</a>). With NBP-rates you can check actual currency courses really simple. Just go to the courses section - and that's it 😉 </section>
                </div>
                <div className="short-describe right">
                    <header className="describe-header">Who runs it?</header>
                    <section className="describe-content">I'm a 16 years old Polish programmer. However, programming is not my only passion - I'm interested in trading and the forex market too. If you want to see more of my project, go to <a target = "_blank" href = "https://github.com/SKupisz/">my github</a> and see the things I am doing.</section>
                </div>
            </section>
        );
    }
}
if(document.getElementById("welcome-container")){
    const component = document.getElementById('welcome-container');
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<WelcomeView {...props} />, component);
}