import React from 'react';
import './App.css';
import { withNaming } from '@bem-react/classname';

import LoginForm from './Components/LoginForm/LoginForm';

const cn = withNaming({ e: '__', m: '_' });
const cnTheme = cn('theme');

function App() {
  return (
    <div className={cnTheme({ size: 'default', space: 'default', breakpoint: 'default', color: 'whitepaper-default', control: 'whitepaper-default' })}>
      <LoginForm loginPlaceholder="Username" passwordPlaceholder="Password" buttonText="Log in" />
    </div>
  );
}

export default App;
