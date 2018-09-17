import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
            <i class="fas fa-bars" style={{color: "#ffad51"}}></i>

            <div className="row">
                <div className="col-xs-3">
                    <button className="btn btn-outline-primary" href="#">Primary</button>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-outline-warning btn-lg"></button>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-outline-warning btn-lg"></button>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-outline-warning btn-lg"></button>
                </div>
            </div>

            <hr>
            </hr>
            </div>
            
        )
    }
}

export default Navbar;