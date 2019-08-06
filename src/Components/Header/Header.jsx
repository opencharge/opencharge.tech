import React from 'react';
import { withNaming } from '@bem-react/classname';
import Logo from "../Logo/Logo";
import Add from "../Add/Add";
import User from "../User/User";
import { HeaderUser } from './User/Header-User.css';
import "./Header.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');
const cnPtCard = cn('pt-card');

export const Header: React.FC = props =>
    <div className={cnHeader({ type: 'desktop' }, [cnPtCard({ view: 'default'})])}>

        <div className={cnHeader('touch-phone')}>
          <div className={cnHeader('panel')}>
            <div className={cnHeader('logo')}>
                <Logo />
            </div>
            <div className={cnHeader('user')}>
                <User />
            </div>
          </div>
          <div className={cnHeader('add')}>
              <Add />
          </div>
        </div>

        <div className={cnHeader('desktop')}>
          <div className={cnHeader('logo')}>
              <Logo />
          </div>
          <div className={cnHeader('add')}>
              <Add />
          </div>
          <div className={cnHeader('user')}>
              <User />
          </div>
        </div>

    </div>


export default Header
