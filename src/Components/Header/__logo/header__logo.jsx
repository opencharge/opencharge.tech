import React from 'react';
import { withNaming } from '@bem-react/classname';
import Logo from "../../Logo/Logo";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');

export const HeaderLogo = props =>
<div className={cnHeader('Logo')}>
    <Logo />
</div>
