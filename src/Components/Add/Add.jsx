import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./Add.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnAdd = cn('add');
const cnText = cn('text');
const cnPtIconPlus = cn('pt-icon-plus');


export const Add: React.FC = props =>
  <div className={cnAdd(null, [cnPtIconPlus({ view: 'default', 'vertical-align': 'center' })])}>
    <div className={cnAdd('block', [cnPtIconPlus('block', { 'space-v': '2xl' })])}>
      <div className={cnAdd('text', [cnText({ size: 'l', view: 'link', weight: 'bold' })])}>
        New
      </div>
    </div>
    <div className={cnAdd('icon', [cnPtIconPlus('icon', { 'indent-l': 'l' })])}>
      <svg width="44" height="36" viewBox="0 0 44 36" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7143 17.95C43.7143 29.55 37.1075 36 21.8571 36C6.55714 36 0 29.6 0 17.95C0 6.35 6.55714 0 21.8571 0C37.1075 0 43.7143 6.4 43.7143 17.95ZM21.0536 26.0357V18.6429H12.2143V17.3571H21.0536V9.64286H22.3393V17.3571H31.1786V18.6429H22.3393V26.0357H21.0536Z"/>
      </svg>
    </div>
  </div>


export default Add
