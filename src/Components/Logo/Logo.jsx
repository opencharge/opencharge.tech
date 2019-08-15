import React from 'react';
import { cn } from '@bem-react/classname';
import "./Logo.css";

const cnLogo = cn('logo');

export const Logo = props =>
    <div className={cnLogo(null)}></div>

export default Logo
