import React from 'react';
import { cn } from '@bem-react/classname';
import './Header-Add.css';
import Add from "../../Add/Add";

const cnHeader = cn('Header');

export const HeaderAdd = props =>
<div className={cnHeader('Add')}>
    <Add />
</div>
