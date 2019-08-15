import React from 'react';
import { cn } from '@bem-react/classname';
import "./User.css";
import { UserName } from './Name/User-Name';
import { UserFace } from './Face/User-Face';

const cnUser = cn('User');
const cnPtIconPlus = cn('PtIconPlus');

export const User = props =>
    <div className={cnUser(null, [cnPtIconPlus({ 'vertical-align': 'center'})])}>
      <div className={cnUser('Block', [cnPtIconPlus('Block', { 'space-v': '2xl' })])}>
        <UserName />
      </div>
      <div className={cnUser('Photo', [cnPtIconPlus('Icon', { 'indent-l': 'l' })])}>
        <UserFace/>
      </div>
    </div>

export default User
