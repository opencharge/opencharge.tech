import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '__', m: '_' });
const theme = cn('theme');


class App extends Component {
  render() {
    return (
      <div className={theme({ 
          color: 'whitepaper-default',
          size: 'default',
          space: 'default',
          breakpoint: 'default',
          control: 'whitepaper-default'
      })}>
        <div style={{ backgroundColor: 'var(--color-bg-default)' }} className="text text_size_l text_view_primary">
          ывывыв
        </div>
      </div>
    );
  }
}

export default App;


