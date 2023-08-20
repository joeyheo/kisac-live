// KISAC.LIVE V2 CLIENT

// KISAC.LIVE V2 CLIENT

import React, { Component, useEffect, useState } from "react";
import "../../../App.css";

// REACT SKELETON IMPORT
import SkeletonComponent, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { BrowserView, MobileView } from "react-device-detect";

// IMAGE IMPORT
const sponsorImage = [
  [
    "https://drive.google.com/uc?id=1F7ULGUgP3hti2rTIg8Gn4J-g90Zsb_IC", //4도시냉면
    "https://drive.google.com/uc?id=1ZO0EtNWyHuffCox4T7tuFVwpIiAdI2s5", //4도시냉면
    "https://www.baemin.com/shopDetail?shopDetail_shopNo=13857217&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1", //4도시
  ],
  [
    "https://drive.google.com/uc?id=1K-rw4Xv5w7sRSqYGEPCHvaYa0Wse3SiN", //롸이스페이퍼
    "https://drive.google.com/uc?id=1sqrGXn1B9UDMBVcuCRDT1RZjFIgLB3Zp", //롸이스페이퍼
    "https://www.baemin.com/shopDetail?shopDetail_shopNo=13738382&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1", //롸이스
  ],
  [
    "https://drive.google.com/uc?id=1YqZc0KT2nha197Z9Df-3dWB2u6r0OFL7", //맛디댜피자
    "https://drive.google.com/uc?id=1oLQNqk4Mhoa_Hj3sxI3eQKUF_9WvDern", //맛디댜피자
    "https://www.baemin.com/shopDetail?shopDetail_shopNo=13344449&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1", //맛디댜피자
  ],
  [
    "https://drive.google.com/uc?id=1ES1WRxcpAa3qswMdHWrnnU8_3z2QKm8x", //유트라이
    "https://drive.google.com/uc?id=1JgMWvcWUce3kbF7PpfBQsRg0X31nFsqs", //유트라이
    "https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=utryedu", //유트라이
  ],
  [
    "https://drive.google.com/uc?id=14BYvSKBxqakWMIvZMqRgdLRYTL5sVjBz", //이백장
    "https://drive.google.com/uc?id=1FtoKxUZOUsl0ydDQFwfybtIRGkX_x4JK", //이백장
    "https://www.baemin.com/shopDetail?shopDetail_shopNo=13804930&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1", //이백장
  ],
];

function randomnumber() {
  const randomSponsorNumber = Math.floor(Math.random() * sponsorImage.length); //For Choosing What Sponsor

  return randomSponsorNumber;
}
function sponsor() {
  var sponsorLink = "";
  var randomSponsorNumber = randomnumber();
  //console.log(randomSponsorNumber);
  if (randomSponsorNumber == 0) {
    sponsorLink =
      "https://www.baemin.com/shopDetail?shopDetail_shopNo=13857217&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1"; //4도시
  } else if (randomSponsorNumber == 1) {
    sponsorLink =
      "https://www.baemin.com/shopDetail?shopDetail_shopNo=13738382&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1"; //롸이스
  } else if (randomSponsorNumber == 2) {
    sponsorLink =
      "https://www.baemin.com/shopDetail?shopDetail_shopNo=13344449&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1"; //맛디댜피자
  } else if (randomSponsorNumber == 3) {
    sponsorLink =
      "https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=utryedu"; //유트라이
  } else {
    sponsorLink =
      "https://www.baemin.com/shopDetail?shopDetail_shopNo=13804930&bm_rfr=SHARE&shopDetail_campaignId=-1&shopDetail_categoryTypeCode=1"; //이백장
  }
  const randomSponsorAd = Math.round(Math.random()); //For Choosing Which Ad (AD_1 or AD_2)
  const sponsorAd = sponsorImage[randomSponsorNumber][randomSponsorAd];

  //const sponsorLink = sponsorImage[randomSponsorNumber][2];
  //console.log(randomSponsorNumber + " and " + randomSponsorAd);
  //console.log(sponsorImage[randomSponsorNumber][randomSponsorAd]);
  //console.log(sponsorLink);
  var combined = sponsorAd + "," + sponsorLink;
  return combined;
}

const runonlyonetime = sponsor();
// MAIN FUNCTION
export default class Advertisement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };
  }

  handleImageLoaded() {
    this.setState({ image: "loaded" });
  }

  render() {
    return (
      <>
      <BrowserView>
      <div class="right floated three three wide column rightCol">
        <div class="sideContent">
          {!this.state.image && <SkeletonComponent width={160} height={600} />}
          <a href={runonlyonetime.split(",")[1]}>
            <img
              src={runonlyonetime.split(",")[0]}
              onLoad={this.handleImageLoaded.bind(this)}
              alt="s"
            ></img>
          </a>
        </div>
      </div>
      </BrowserView>

      <MobileView></MobileView>
      </>
    );
  }
}
