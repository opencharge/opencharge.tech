import React from 'react';
import { withNaming } from '@bem-react/classname';
import { HeaderUser } from './__user/header__user';
import { HeaderAdd } from './__add/header__add';
import { HeaderLogo } from './__logo/header__logo';
import { HeaderPanel } from './__panel/header__panel.css';

import { HeaderDesktop } from './__desktop/header__desktop.css';
import { HeaderTouchPhone } from './__touch-phone/header__touch-phone.css';
import "./Header.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');
const cnPtCard = cn('pt-card');

export const Header = props =>
    <div className={cnHeader({ type: 'desktop' }, [cnPtCard({ view: 'default'})])}>
        <div className={cnHeader('desktop')}>
          <HeaderLogo />
          <HeaderAdd />
          <HeaderUser />
        </div>
        <div className={cnHeader('touch-phone')}>
            <div className={cnHeader('panel')}>
              <HeaderLogo />
              <HeaderAdd />
              <HeaderUser />
            </div>
          </div>
    </div>

export default Header
