import React, { Component } from 'react'
import '../App.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end d-none d-lg-flex">
                    <a className="navbar-brand" href="#">Adam Ferguson</a>
                    <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">About</a>
                            <a className="nav-item nav-link" href="#">Projects</a>
                            <a className="nav-item nav-link" href="#">Social</a>
                            <a className="nav-item nav-link" href="#">Contact Me</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
