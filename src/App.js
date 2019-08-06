import React from 'react';
import Total from './Components/Total/Total';
import './App.css';
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '__', m: '_' });
const cnTheme = cn('theme');
const cnApp = cn('app');

function App() {
  return (
    <div className={ cnApp(null, [cnTheme({ color: 'whitepaper-default', size: 'default', space: 'default' })]) }>
      <Total amountWeek="35,75" amountMonth="128" amountYear="1135,75"/>
    </div>
  );
}

export default App;
