import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./Add.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnAdd = cn('add');
const cnText = cn('text');
const cnPtIconPlus = cn('pt-icon-plus');

function Add() {
  return (
    <div className={cnAdd(null, [cnPtIconPlus({ view: 'default', 'vertical-align': 'center' })])}>
      <div className={cnAdd('block', [cnPtIconPlus('block', { 'space-v': '2xl' })])}>
        <div className={cnAdd('text', [cnText({ size: 'l', weight: 'bold' })])}>
          New
        </div>
      </div>
      <div className={cnAdd('icon', [cnPtIconPlus('icon', { 'indent-l': 'l' })])}></div>
    </div>
  )
}

export default Add
