import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Image } from "semantic-ui-react";
import image from "../../../resources/logo/icon_logo_white.png"; //../../resources/images/testimage.png
import "../horizontalscroll.css";
export function Card({ title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        maxwidth: "246px",
        maxheight: "132px",
        marginright: "10px",
        objectfit: "cover",
        userSelect: "none",
      }}
      tabIndex={0}
      className="skin__option"
    >
      <div>
        <Image className="skin__option" src={image} rounded />
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
      </div>
    </div>
  );
}
