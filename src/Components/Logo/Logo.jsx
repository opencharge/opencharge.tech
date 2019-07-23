import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import logo from './logo_opencharge.svg';   

class Logo extends Component {
    render() {
        return (
            <img src={logo} alt="logo" />
        );
    }
}

export default Logo;
