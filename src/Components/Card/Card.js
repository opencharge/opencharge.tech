import React from "react";
import "./Card.css";
//import CardHeader from '../CardHeader/CardHeader';
//import CardContent from '../CardContent/CardContent';
import more from "../../img/more.svg";

class Card extends React.Component {
  render() {
    return (
      <div className={`Card ${this.props.styleName}`}>
        <div className="Card__header">
          <div className="Card__sevice-name">{this.props.serviceName}</div>
          <div className="Card__actions">
            {<img src={more} className="action_more" alt="action_more" />}
          </div>
        </div>

        <div className="Card__content">
          <div className="price">
            <div className="price__title">Mounth</div>
            <div className="price__quantity">{this.props.price}</div>
          </div>
          <div className="Card__name-wrapper">
            <div className="Card__name">{this.props.cardName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
