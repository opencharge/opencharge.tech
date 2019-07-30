import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import './LoginForm.css';
import Button from '../Button/Button'
import Input from '../Input/Input'
import Logo from '../Logo/Logo'
import Social from '../Social/Social'
  
const cn = withNaming({ e: '__', m: '_' });
const cnPtForm = cn('pt-form');
const cnPtCard = cn('pt-card');
const cnDecorator = cn('decorator');
const cnText = cn('text')
const cnButton = cn('button');

class LoginForm extends Component {
    render() {
        return (
            <div className={`${cnPtCard(null, [cnPtCard({ view: 'default' })])} alignCenter`} >
                <div className={cnPtCard('content', { "vertical-align": "center" })}>

                    <Logo />

                    <div className={`${cnPtForm(null, [cnPtForm({ view: 'default' })])} ${cnDecorator(null, [cnDecorator({'space-a': '3xl'})])}`}>
                        <div className={cnDecorator(null, [cnDecorator({'indent-b': '2xl', })])}>
                            <div className={cnText(null, [cnText({ weight: 'bold', size: '2xl', view: 'primary'})])}>
                                Login
                            </div>
                        </div>
                        <button className={`${cnButton(null, [cnButton({ width: 'full', size: 'l', view: 'primary', form:'round'  })])}`}>
                            Login with Facebook
                        </button>
                        <div className={cnDecorator(null, [cnDecorator({'indent-t': 'xl', 'indent-b': 'xl'})])}>
                            <div className={cnText(null, [cnText({ size: 'xl', view: 'primary'})])}>
                                or
                            </div>
                        </div>
                        <Input placeholder={this.props.loginPlaceholder} inputDecorator={cnDecorator(null, [cnDecorator({'indent-b': 'l'})])}/>
                        <Input placeholder={this.props.passwordPlaceholder} inputDecorator={cnDecorator(null, [cnDecorator({'indent-b': 'l'})])}/>
                        <Button text={this.props.buttonText} />
                        <div className={cnDecorator(null, [cnDecorator({'indent-t': '2xl', })])}>
                            <Social />  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
                