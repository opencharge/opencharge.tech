import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '__', m: '_' });
const theme = cn('theme');
const layout = cn('layout');


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

          <div className={layout({ structure: '100' })} style={{ minHeight: '100vh' }}>
            <div className={layout('section')}>
              <div className={layout('content')}>
                <div className={layout('container', { size: 'm', distribute: 'center' })}>
                  <div classname={}>

                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;