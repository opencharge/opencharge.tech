import React from "react";
import { withNaming } from "@bem-react/classname";

const cn = withNaming({ e: "__", m: "_" });
const cnText = cn("text");

function Filter(props) {
  return (
    <div
      className={`${"filter"} ${cnText({
        align: "right",
        display: "inline-block",
        size: "m",
        view: "link"
      })}`}
    >
      {props.content}
    </div>
  );
}

export default Filter;
