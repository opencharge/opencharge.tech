import React from 'react';
import { withNaming } from '@bem-react/classname';
import Logo from "../Logo/Logo";
import Add from "../Add/Add";
import User from "../User/User";
import "./Header.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');
const cnPtCard = cn('pt-card');

class Header extends React.Component {
    render() {
      return (
        <div className={cnHeader(null, [cnPtCard({ view: 'default'})])}>
            <div className={cnHeader('logo')}>
                <Logo />
            </div>
            <div className={cnHeader('add')}>
                <Add />
            </div>
            <div className={cnHeader('user', [cnPtCard('content', { 'space-a': 'l' })])}>
                <User />
            </div>
        </div>
      )
    }
}

export default Header
