import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./User.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnUser = cn('user');
const cnPtIconPlus = cn('pt-icon-plus');

class User extends React.Component {
  render() {
    return (
      <div className={cnUser(null, [cnPtIconPlus({ view: 'default'})])}>
          <div className={cnUser('logo', [cnPtIconPlus('icon', { 'indent-r': 'l' })])}>
            Avatar
          </div>
          <div className={cnUser('price', [cnPtIconPlus('block', { 'space-v': '2xl' })])}>
            John Doe
          </div>
      </div>
    )
  }
}

export default User
