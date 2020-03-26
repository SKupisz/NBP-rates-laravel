import React from "react";
import ReactDOM from "react-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="main-navbar">
                <a href = "/">
                    <div className="home nav-item">NBP-rates</div>
                </a>
                <a href = "/courses">
                    <div className="course nav-item">Currency courses</div>
                </a>
                <a href = "/gold">
                    <div className="gold nav-item">Gold courses</div>
                </a>
                <a href = "/contact">
                    <div className="contact nav-item">Contact</div>
                </a>  
            </nav>
        );
    }
}

if(document.getElementById("main-nav")){
    const component = document.getElementById('main-nav');
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<Navbar {...props} />, component);
}