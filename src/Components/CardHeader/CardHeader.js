import React from 'react';
import './CardHeader.css';
import more from '../../img/more.svg';

function CardHeader(props) {
  return (
    <div className="Card__header">
      <div className="Card__sevice-name">
      {props.serviceName}
      </div>
      <div className="Card__actions">
        { <img src={more} className="action_more" alt="action_more" />}
      </div>
    </div>
    );
  
};

export default CardHeader;
