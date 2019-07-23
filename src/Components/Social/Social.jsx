import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './Social.css';
import Icon from './icons/social'; 

let icons = ['twitter', 'facebook', 'linkedin'];

class Social extends Component {
    render() {
        return (
            <div className='social'>
                {icons.map((item)=> <Icon name={item} size="30"/>)}
            </div>
        );
    }
}

export default Social;
