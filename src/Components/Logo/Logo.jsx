import React from 'react';
import { withNaming } from '@bem-react/classname';
import "./Logo.css";

const cn = withNaming({ e: '__', m: '_', v: '_' });
const cnLogo = cn('logo');

class Logo extends React.Component {
  render() {
    return (
      <div className={cnLogo(null)}>
        Logo
      </div>
    )
  }
}

export default Logo
