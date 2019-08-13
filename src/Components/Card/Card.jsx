import React from "react";
import { withNaming } from "@bem-react/classname";
import "./Card.css";
import more from "../../img/more.svg";

const cn = withNaming({ e: "__", m: "_" });
const cnPtCard = cn("pt-card");
const cnText = cn("text");


export default function Card(props) {
  return (
    <div
      className={`${cnPtCard({ view: props.view })} ${"Card"} ${
        props.card.styleName
        } ${"theme"} ${"theme_color_whitepaper-inverse"}`}
    >
      <div className={`${cnPtCard("header", { distribute: "between", "space-a": "l" })}`}>
        <div className={cnText({ view: 'primary', size: 'm', weight: "bold" })}>{props.card.serviceName}</div>
        <div className="actions">
          {<img src={more} className="action_more" alt="action_more" />}
        </div>
      </div>

      <div className={`${cnPtCard("content", { distribute: "between", "space-h": "l", "space-t": "5xl", "space-b": "l" })}`} style={{ alignItems: "center" }}>
        <div className="price">
          <div className={cnText({ view: 'primary', size: 's', align: "left", weight: "light" })}>Mounth</div>
          <div className={cnText({ view: 'primary', size: '3xl', weight: "bold" })}>
            $
            {props.card.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
          </div>
        </div>
        <div className="name">
          <div className={cnText({ view: 'primary', size: 'm' })}>{props.card.cardName}</div>
        </div>
      </div>
    </div>
  );
}
