import React from 'react';
import { cn } from '@bem-react/classname';
import './Header-User.css';
import User from "../../User/User";

const cnHeader = cn('header');

export const HeaderUser = props =>
<div className={cnHeader('User')}>
    <User />
</div>
