import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";

export default class MainParticles extends React.Component{
    render(){
        return(
            <Particles params={{
                particles: {
                    number: {
                        value: 80,
                        density: {
                          enable: true,
                          value_area: 700
                        }
                      },
                    color: {
                        value: "#ccc"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                          width: 3,
                          color: "rgba(1,1,1,.2)"
                        },
                        polygon: {
                          nb_sides: 15
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ccc",
                        opacity: 0.4,
                        width: 1
                    }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                }}
            } } className = "main-particles"/>
        );
    }
}

if(document.getElementById("main-particles-container")){
    const component = document.getElementById('main-particles-container');
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<MainParticles {...props} />, component);
}