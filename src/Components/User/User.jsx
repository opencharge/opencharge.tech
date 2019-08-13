import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./User.css";
import { UserName } from './__name/user__name';
import { UserFace } from './__face/user__face';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnUser = cn('user');
const cnPtIconPlus = cn('pt-icon-plus');

export const User = props =>
    <div className={cnUser(null, [cnPtIconPlus({ 'vertical-align': 'center'})])}>
      <div className={cnUser('block', [cnPtIconPlus('block', { 'space-v': '2xl' })])}>
        <UserName />
      </div>
      <div className={cnUser('photo', [cnPtIconPlus('icon', { 'indent-l': 'l' })])}>
        <UserFace/>
      </div>
    </div>

export default User
