import React from 'react';
import { cn } from '@bem-react/classname';
import './User-Name.css';

const cnUser = cn('User');
const cnText = cn('Text');

export const UserName = props =>
<div className={cnUser('Name', [cnText({ view: 'primary', size: 'l' })])}>
  Aaron Poe
</div>
