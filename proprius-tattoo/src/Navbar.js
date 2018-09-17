import React, { Component } from 'react';
import Hr from 'react-native-hr';


class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
            <i class="fas fa-bars" style={{color: "#ffad51"}}></i>
            <Hr />
            </div>
            
        )
    }
}

export default Navbar;