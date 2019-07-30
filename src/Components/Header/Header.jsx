import React from 'react';
import { withNaming } from '@bem-react/classname';
import Logo from "../Logo/Logo";
import Add from "../Add/Add";
import User from "../User/User";
import "./Header.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');
const cnPtCard = cn('pt-card');

function Header() {
  return (
    <div className={cnHeader({ type: 'desktop' }, [cnPtCard({ view: 'default'})])}>
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
    </div>
  )
}

export default Header
