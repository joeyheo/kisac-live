import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
import { Footer } from "./footer";
import { Header } from "./header";
import "./globalStyles.css";
import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: embrace power of CSS flexbox!
import "./arrowsOnBottomOrTop.css";
import "./hideScrollbar.css";
import "./firstItemMargin.css";

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function App() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>

    </>
  );
}
export default App;


