import React from 'react';
import { cn } from '@bem-react/classname';
import './User-Face.css';
import pic from './aaron.jpg';

const cnUser = cn('User');
const cnAvatar = cn('Avatar');

export const UserFace = props =>
<div className={cnUser('Face', [cnAvatar('Photo', { 'size': 's', 'indent-l': 'm' })])}>
   <img src={pic} />
</div>
