import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./User.css";
import pic from './aaron.jpg';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnUser = cn('user');
const cnText = cn('text');
const cnPtIconPlus = cn('pt-icon-plus');
const cnAvatar = cn('avatar');

export const User: React.FC = props =>
    <div className={cnUser(null, [cnPtIconPlus({ 'vertical-align': 'center'})])}>
      <div className={cnUser('block', [cnPtIconPlus('block', { 'space-v': '2xl' })])}>
        <div className={cnUser('name', [cnText({ view: 'primary', size: 'l' })])}>
          Aaron Poe
        </div>
      </div>
      <div className={cnUser('photo', [cnPtIconPlus('icon', { 'indent-l': 'l' })])}>
        <div className={cnUser(null, [cnAvatar()])}>
          <div className={cnUser('pic', [cnAvatar('photo', { 'size': 's' })])}>
              <img src={pic} />
          </div>
        </div>
      </div>
    </div>

export default User
