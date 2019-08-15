import React from 'react';
import { cn } from '@bem-react/classname';
import Logo from "../../Logo/Logo";

const cnHeader = cn('Header');

export const HeaderLogo = props =>
<div className={cnHeader('Logo')}>
    <Logo />
</div>
