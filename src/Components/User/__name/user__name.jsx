import React from 'react';
import { withNaming } from '@bem-react/classname';
import './user__name.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnUser = cn('user');
const cnText = cn('text');

export const UserName = props =>
<div className={cnUser('name', [cnText({ view: 'primary', size: 'l' })])}>
  Aaron Poe
</div>
