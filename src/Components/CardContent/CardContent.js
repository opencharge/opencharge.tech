import React from 'react';
import './CardContent.css';

function CardContent(props) {
  return (
    <div className="Card__content">
      <div className="price">
        <div className="price__title">
          Mounth
        </div>
        <div className="price__quantity">
        {props.price}
        </div>
      </div>
      <div className="Card__name-wrapper">
        <div className="Card__name">
        {props.cardName}
        </div>
      </div>
    </div>
    );
  
};

export default CardContent;
