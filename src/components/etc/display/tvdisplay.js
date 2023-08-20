import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import { Segment, Container, Grid, Embed, Card, Image, Label } from "semantic-ui-react";
import "../../../App.css";

// import irene from "../../resources/images/24_IreneYang.jpg" <3;
import { db } from "../../../firebase/firebaseConfig";

// POST CARDS
import { collection, query, where, onSnapshot,doc } from "firebase/firestore";

const scoring = doc(db, "scoring", "T757eK6XKMqhIZUsa81E");
const Scoring = () => {
    let [sjascore, setSjascore] = useState(0); 
    let [kisscore, setKisscore] = useState(0); 
    let [kiswin, setKiswin] = useState(0); 
    let [sjawin, setSjawin] = useState(0); 
    let [quat, setQuat] = useState(0);
    let datarecieved;

    const unsub = onSnapshot(scoring, (doc) => {
        console.log("Current data: ", doc.data());
        datarecieved = doc.data()
        setQuat(datarecieved.quat);
        setSjascore(datarecieved.sjascore);
        setKisscore(datarecieved.kisscore);
        setSjawin(datarecieved.sjawin);
        setKiswin(datarecieved.kiswin);
    });
  return (
    <div class="containerf">
    <div class="team2 team-a houston">
      <div class="team-logo">
         <img src="https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC" width="300px" height="300px"/>
      </div>
      <div class="team-detail">
      <p class="teamtext">SJAJ &nbsp;&nbsp;&nbsp;{sjascore}</p>
      </div>
   </div>

   <div class="timer2">
      <div class="timer2-container">
          <div id= "quat" class="quarter">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SJAJ ({sjawin}) | NLCS ({kiswin})
          </div>
          <div class="time2left">
              SET: {quat}
          </div>
      </div> 
   </div>

  <div class="team2 team-b dallas">
      <div class="team-logo">
         <img src="https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC" width="300px" height="300px"/>
      </div>
      <div class="team-detail">
      <p class="teamtext">NLCS &nbsp;&nbsp;{kisscore}</p>
      </div>

  </div>


    </div>

  


   
   
  );
};

export default Scoring;
