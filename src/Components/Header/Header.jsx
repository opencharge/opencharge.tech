import React from 'react';
import { cn } from '@bem-react/classname';
import { HeaderUser } from './User/Header-User';
import { HeaderAdd } from './Add/Header-Add';
import { HeaderLogo } from './Logo/Header-Logo';
import { HeaderPanel } from './Panel/Header-Panel.css';

import { HeaderDesktop } from './Desktop/Header-Desktop.css';
import { HeaderTouchPhone } from './TouchPhone/Header-TouchPhone.css';
import "./Header.css";

const cnHeader = cn('Header');
const cnPtCard = cn('PtCard');

export const Header = props =>
  <div className={cnHeader({ type: 'Desktop' }, [cnPtCard({ view: 'default'})])}>
      <div className={cnHeader('Desktop')}>
        <HeaderLogo />
        <HeaderAdd />
        <HeaderUser />
      </div>
      <div className={cnHeader('TouchPhone')}>
          <div className={cnHeader('Panel')}>
            <HeaderLogo />
            <HeaderUser />
          </div>
          <HeaderAdd />
        </div>
  </div>

export default Header
