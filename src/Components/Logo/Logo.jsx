import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./Logo.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnLogo = cn('logo');

export const Logo = props =>
    <div className={cnLogo(null)}></div>

export default Logo
