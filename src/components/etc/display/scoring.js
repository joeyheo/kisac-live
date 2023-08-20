import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import { Segment, Container, Grid, Embed, Card, Image, Label } from "semantic-ui-react";
import "../../../App.css";

// import irene from "../../resources/images/24_IreneYang.jpg" <3;
import { db } from "../../../firebase/firebaseConfig";

// POST CARDS

import {
  getDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  doc,
  updateDoc,
  onSnapshot,
  orderBy,
  QuerySnapshot,
} from "firebase/firestore";

const Scoring = (props) => {
   const [phototeamone, setPhototeamone] = useState();
   const [phototeamtwo, setPhototeamtwo] = useState();
   const [players, setPlayers] = useState([]);
   const [teamone, setTeamone] = useState([]);
   const [teamtwo, setTeamtwo] = useState([]);
   let [sch1score, setSch1score] = useState(0);
   let [sch2score, setSch2score] = useState(0);
   let [sch1win, setSch1win] = useState(0);
   let [sch2win, setSch2win] = useState(0);
   const [teamonecolor, setTeamonecolor] = useState([]);
   const [teamtwocolor, setTeamtwocolor] = useState([]);
   const [name, setName] = useState();
   const [quat, setQuat] = useState(1);
   const [live, setLive] = useState();
   const [url, setUrl] = useState();
   const [sport, setSport] = useState();
   const [timestart, setTimestart] = useState();
   let { scheduleId } = useParams();
   const location = useLocation();
   const scoring = doc(db, "/competition/volleyball/volleyball"+`/${scheduleId}`);
   useEffect(() => {
      //get the scedule

      onSnapshot(scoring, (doc)=> {
         const data = [];
        const datarecieved = doc.data();
          console.log("hi");
          console.log(datarecieved);
          
          setTeamone(datarecieved.sch1);
          setTeamtwo(datarecieved.sch2);
          setName(datarecieved.name);
          setUrl(datarecieved.livevideourl);
          setSch1score(datarecieved.sch1score);
          setSch2score(datarecieved.sch2score);
          setSch1win(datarecieved.sch1win);
          setSch2win(datarecieved.sch2win);
          setQuat(datarecieved.quat);
          setSport(datarecieved.sport);
          setTimestart(datarecieved.timestart);
    
          //If Statement to select the image of that will be displayed in the main page;
          //Team 1 - if Loop
          if(datarecieved.live == false){
            setLive("Offline");
          } else {
            setLive("Live");
          }
          if(datarecieved.sch1 == "SJAJ"){
            setPhototeamone("https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC");
            setTeamonecolor("#09751E");
          } else if(datarecieved.sch1 == "KISJ"){
            setPhototeamone("https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ");
            setTeamonecolor("#FFDC00");
         } else if (datarecieved.sch1 == "NLCS"){
            setPhototeamone("https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC");
            setTeamonecolor("#6CB8ED");
         } else if (datarecieved.sch1 == "BHA"){
            setPhototeamone("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
            setTeamonecolor("#7223D1");
         } else if (datarecieved.sch1 == "BIS"){
          setPhototeamone("https://drive.google.com/uc?id=1Tjz8c1eHf1IykB_xdTZ96hK9g3aeqcl5");
          setTeamonecolor("#99090B");
         } else if (datarecieved.sch1 == "FPS"){
              setPhototeamone("https://drive.google.com/uc?id=1_91A4fPva-VT7OI54EHgS8VXHvCkofuw");
              setTeamonecolor("#EAB629");
            } else if (datarecieved.sch1 == "SIS"){
              setPhototeamone("https://drive.google.com/uc?id=1p_SXCSpAeuitTfggNX_EGOIF6WNIk4sz");
              setTeamonecolor("#BC4700");
            } else if (datarecieved.sch1 == "CI"){
              setPhototeamone("https://drive.google.com/uc?id=1RLQZXhKHjS69Ee6S5UHj2bmHCWiPaZYU");
              setTeamonecolor("#515A94");
            } else if (datarecieved.sch1 == "DCS"){
              setPhototeamone("https://drive.google.com/uc?id=1O1IqnA0mzJuAyNHHn3LMXKuerFnFVK-d");
              setTeamonecolor("#AE250F");
            } else if (datarecieved.sch1 == "GSIS"){
              setPhototeamone("https://drive.google.com/uc?id=1v5w1jOAQqyOx5oiaV5HipPw1MtU2EXWh");
              setTeamonecolor("#5D007E");
            } else if (datarecieved.sch1 == "BHA2"){
              setPhototeamone("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
              setTeamonecolor("#7223D1");
            } else if (datarecieved.sch1 == "KIS"){
              setPhototeamone("https://drive.google.com/uc?id=1oeCZ7PG4EJpYufuh2iuk47i9qs_L6ioe");
              setTeamonecolor("#92D8E3");
            } 
          //Team 2 - if Loop
          if(datarecieved.sch2 == "SJAJ"){
            setPhototeamtwo("https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC");
            setTeamtwocolor("#09751E"); 
         } else if(datarecieved.sch2 == "KISJ"){
            setPhototeamtwo("https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ");
            setTeamtwocolor("#FFDC00"); 
         } else if (datarecieved.sch2 == "NLCS"){
            setPhototeamtwo("https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC");
            setTeamtwocolor("#6CB8ED"); 
         } else if (datarecieved.sch2=="BHA"){
            setPhototeamtwo("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
            setTeamtwocolor("#7223D1"); 
         } else if (datarecieved.sch2 == "BIS"){
              setPhototeamtwo("https://drive.google.com/uc?id=1Tjz8c1eHf1IykB_xdTZ96hK9g3aeqcl5");
              setTeamtwocolor("#99090B"); 
            } else if (datarecieved.sch2 == "FPS"){
              setPhototeamtwo("https://drive.google.com/uc?id=1_91A4fPva-VT7OI54EHgS8VXHvCkofuw");
              setTeamtwocolor("#EAB629");  
            } else if (datarecieved.sch2 == "SIS"){
                  setPhototeamtwo("https://drive.google.com/uc?id=1p_SXCSpAeuitTfggNX_EGOIF6WNIk4sz");
                  setTeamtwocolor("#BC4700"); 
               } else if (datarecieved.sch2 == "CI"){
                  setPhototeamtwo("https://drive.google.com/uc?id=1RLQZXhKHjS69Ee6S5UHj2bmHCWiPaZYU");
                  setTeamtwocolor("#515A94"); 
               } else if (datarecieved.sch2 == "DCS"){
                  setPhototeamtwo("https://drive.google.com/uc?id=1O1IqnA0mzJuAyNHHn3LMXKuerFnFVK-d");
                  setTeamtwocolor("#AE250F"); 
               } else if (datarecieved.sch2 == "GSIS"){
                  setPhototeamtwo("https://drive.google.com/uc?id=1v5w1jOAQqyOx5oiaV5HipPw1MtU2EXWh");
                  setTeamtwocolor("#5D007E"); 
               } else if (datarecieved.sch2 == "BHA2"){
                  setPhototeamtwo("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
                  setTeamtwocolor("#7223D1"); 
               } else if (datarecieved.sch2 == "KIS"){
                  setPhototeamtwo("https://drive.google.com/uc?id=1oeCZ7PG4EJpYufuh2iuk47i9qs_L6ioe");
                  setTeamtwocolor("#92D8E3"); 
               } 

      });
          
       
      
    }, []);
    
  return (
    <div class="ui fluid card">

<div>
    <div class="scoreboard">
   <div class="team team-a houston" >
      <div class="team-logo">
         <img src={phototeamone} width="50px" height="50px"/>
      </div>
      <div class="team-detail">
         <div class="team-nameandscore">
            <div class="team-name">
               {teamone}
            </div>
            <div id="teamonescore"class="team-score">
               {sch1score}
            </div>
         </div>
         <div class="team-thisgame">
           
            <div id="teamonewin"class="team-bonus">
               {sch1win}
            </div>
         </div>
      </div>
   </div>
   <div class="team team-b dallas">
      <div class="team-logo">
         <img src={phototeamtwo} width="50px" height="50px"/>
      </div>
      <div class="team-detail">
         <div class="team-nameandscore">
            <div class="team-name">
               {teamtwo}
            </div>
            <div id= "teamtwoscore"class="team-score">
               {sch2score}
            </div>
         </div>
         <div class="team-thisgame">
            <div id="teamtwowin"class="team-bonus">
               {sch2win}
            </div>
         </div>
      </div>
   </div>
   <div class="timer">
      <div class="timer-container">
          <div id= "quat" class="quarter">
            {quat}
          </div>
          <div class="timeleft">
              <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.2.min.js"></script>
<span class="minute">00</span>:<span class="second">00</span>
       
          </div>
      </div> 
   </div>
   <div class="logo">
      <img src="https://drive.google.com/uc?id=1PhZmytNITHOgaWmn3luoIEXE_JOzvSI_"/>
   </div>
   </div>
<hr/>
&nbsp;&nbsp;<a>{teamone}</a>&nbsp;&nbsp;
    <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch1score: sch1score});setSch1score(sch1score + 1);}}>Add 1 {teamone}</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-default" onClick={() => {updateDoc(scoring, {sch1score: sch1score}); setSch1score(sch1score - 1)}}>Remove 1 {teamone}</button>&nbsp;&nbsp;
     <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch1win: sch1win});setSch1win(sch1win + 1)}}>Add {teamone} WIN</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch1win: sch1win});setSch1win(sch1win - 1)}}>Remove {teamone} WIN</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch1score: sch1score});setSch1score(sch1score =0)}}>{teamone} score reset</button>

<hr/>
&nbsp;&nbsp;<a>{teamtwo}</a>&nbsp;&nbsp;
<button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch2score: sch2score});setSch2score(sch2score + 1);}}>Add 1 {teamtwo}</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-default" onClick={() => {updateDoc(scoring, {sch2score: sch2score}); setSch2score(sch2score - 1)}}>Remove 1 {teamtwo}</button>&nbsp;&nbsp;
     <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch2win: sch2win});setSch2win(sch2win + 1)}}>Add {teamtwo} WIN</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch2win: sch2win});setSch2win(sch2win - 1)}}>Remove {teamtwo} WIN</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {sch2score: sch2score});setSch2score(sch2score =0)}}>{teamtwo} score reset</button>
<hr/>     
&nbsp;&nbsp;<a>QUARTER</a>&nbsp;&nbsp;
  <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {quat: quat});setQuat(quat + 1)}}>Add Quarter</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-default"  onClick={() => {updateDoc(scoring, {quat: quat});setQuat(quat - 1)}}>Remove Quarter</button>
  
   


</div>
    </div>


   
   
  );
};

export default Scoring;

