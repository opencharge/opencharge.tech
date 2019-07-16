import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./Add.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnUser = cn('user');
const cnPtIconPlus = cn('user');

class Add extends React.Component {
  render() {
    return (
      <div className={cnUser(null, [cnPtIconPlus({ view: 'default'})])}>
        <div className={cnUser('logo', [cnPtIconPlus('icon', { 'indent-r': 'l' })])}>
          New
        </div>
        <div className={cnUser('price', [cnPtIconPlus('block', { 'space-v': '2xl' })])}>
          Add
        </div>
      </div>
    )
  }
}

export default Add
