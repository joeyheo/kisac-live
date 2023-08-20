// KISAC.LIVE V2 CLIENT

import React from "react";
import { Image } from "semantic-ui-react";
import "./horizontalscroll.css";
import image from "../../resources/logo/icon_logo_white.png"; //../../resources/images/testimage.png

export default function LiveHorizontalList() {
  return (
    <div className="blue">
      <div className="scroll__container">

        <Image className="skin__option" src={"https://i.ytimg.com/vi/Y6GlOnygdVw/hqdefault_live.jpg"} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
        <Image className="skin__option" src={image} rounded />
      </div>
    </div>
  );
}
