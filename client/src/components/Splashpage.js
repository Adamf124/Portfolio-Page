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
                    Welcome 
                </div>
            </div>
        )
    }
}
