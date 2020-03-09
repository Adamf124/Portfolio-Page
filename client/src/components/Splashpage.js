import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

export default class Splashpage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                </header>
                <div className='splash'>
                    <div className="welcome-mat"><h1 className="welcome-text">WELCOME</h1></div>
                </div>
            </div>
        )
    }
}
