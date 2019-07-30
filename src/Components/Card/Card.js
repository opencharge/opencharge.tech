import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Card.css";
import more from "../../img/more.svg";

const cn = withNaming({ e: "__", m: "_" });
const cnPtCard = cn("pt-card");
const cnCard = cn("Card");

export default function Card(props) {
  return (
    <div
      className={`${cnPtCard({ view: "default" })} ${"Card"} ${
        props.card.styleName
      }`}
    >
      <div className={cnCard("header")}>
        <div className={cnCard("sevice-name")}>{props.card.serviceName}</div>
        <div className={cnCard("actions")}>
          {<img src={more} className="action_more" alt="action_more" />}
        </div>
      </div>

      <div className={cnCard("content")}>
        <div className="price">
          <div className="price__title">Mounth</div>
          <div className="price__quantity">
            $
            {props.card.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
          </div>
        </div>
        <div className={cnCard("name-wrapper")}>
          <div className={cnCard("name")}>{props.card.cardName}</div>
        </div>
      </div>
    </div>
  );
}
