import React from 'react';
import { withNaming } from '@bem-react/classname';
import './header__add.css';
import Add from "../../Add/Add";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnHeader = cn('header');

export const HeaderAdd = props =>
<div className={cnHeader('add')}>
    <Add />
</div>
