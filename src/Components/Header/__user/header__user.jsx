import React from 'react';
import { withNaming } from '@bem-react/classname';
import './header__user.css';
import User from "../../User/User";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');

export const HeaderUser = props =>
<div className={cnHeader('user')}>
    <User />
</div>
