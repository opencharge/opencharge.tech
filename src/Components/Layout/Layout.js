import React from "react";
import { withNaming } from "@bem-react/classname";
import Title from "../Title/Title";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import cardData from "../../cardData";

const cn = withNaming({ e: "__", m: "_" });
const cnLayout = cn("tpl-layout");
const cnDecorator = cn("decorator");

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
            <div
              className={`${"title-wrapper"} ${cnDecorator({ "space-v": "l" })}`}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Title content="Subscriptions" />
              <Filter content="By date" />
            </div>
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
