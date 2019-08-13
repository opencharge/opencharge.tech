import React from 'react';
import { withNaming } from '@bem-react/classname';
import './user__face.css';
import pic from './aaron.jpg';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnUser = cn('user');
const cnText = cn('text');
const cnAvatar = cn('avatar');

export const UserFace = props =>
<div className={cnUser('face', [cnAvatar('photo', { 'size': 's' })])}>
   <img src={pic} />
</div>
