import React, { Component } from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Splashpage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <div className='splash'>
                    <div className="welcome-mat">
                        <h1 className="welcome-text welcome-text-sm d-xs-block d-lg-none">WELCOME</h1>
                        <h1 className="welcome-text d-none d-lg-block">WELCOME LARGE </h1>
                    </div>
                </div>

            </div>
        )
    }
}
