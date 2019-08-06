import React from "react";
import { withNaming } from "@bem-react/classname";

const cn = withNaming({ e: "__", m: "_" });
const cnText = cn("text");

function Title(props) {
  return (
    <div
      className={`${"title"} ${cnText({
        align: "left",
        display: "inline-block",
        size: "xl",
        view: "primary",
        weight: "bold"
      })}`}
    >
      {props.content}
    </div>
  );
}

export default Title;
