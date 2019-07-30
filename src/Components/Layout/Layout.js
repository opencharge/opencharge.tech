import React from "react";
import { withNaming } from "@bem-react/classname";
import Card from "../Card/Card";
import cardData from "../../cardData";

const cn = withNaming({ e: "__", m: "_" });
const cnLayout = cn("tpl-layout");

function Layout({ children }) {
  const CardComponents = cardData.map(item => (
    <Card key={item.id} card={item} />
  ));

  return (
    <div
      className={cnLayout({ structure: "50-50" })}
      style={{ minHeight: "100vh" }}
    >
      <div className={cnLayout("section")}>
        <div className={cnLayout("content")}>
          <div
            className={cnLayout("container", {
              size: "m",
              distribute: "center"
            })}
          >
            {/* <Card
              serviceName="1st"
              price="123"
              cardName="Tinkoff"
              styleName="Card_invision"
            /> */}
            {CardComponents}
          </div>
        </div>
      </div>

      <div className={cnLayout("section")}>
        <div className={cnLayout("section")}>
          <div
            className={cnLayout("container", {
              size: "m",
              distribute: "center"
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
