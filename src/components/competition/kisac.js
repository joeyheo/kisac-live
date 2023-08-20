import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import { Segment, Container, Grid, Embed, Card, Image, Label } from "semantic-ui-react";
import { getDoc,doc, getDocs,where, query } from "firebase/firestore";
import SkeletonComponent, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { db } from "../../firebase/firebaseConfig";
import Stream from "../stream/watch";
import "../../App.css";


const ScheduleDetail = (props) => {
  const [url1, setUrl1] = useState();
  const [url2, setUrl2] = useState();
  const [name1, setName1] = useState([]);
  const [name2, setName2] = useState([]);
  const [teamtwo, setTeamtwo] = useState([]);
  let { scheduleId } = useParams();
  const location = useLocation();



  useEffect(() => {
    //get the scedule
    getDoc(doc(db, "/competition/tennis/tennis"+`/PxOZiyBJyiNvVct2UGku`)).then(docSnap => {
      if (docSnap.exists()) {
        const datarecieved = docSnap.data();
        console.log("hi");
        console.log(datarecieved);
        setName1(datarecieved.name1);
        setUrl1(datarecieved.livevideourl1);
        setName2(datarecieved.name2);
        setUrl2(datarecieved.livevideourl2);
        //If Statement to select the image of that will be displayed in the main page;
        //Team 1 - if Loop
       
      }else {
        console.log("No such document!");
      }
    })
   // const q = doc(db,`/schedules/${scheduleId}`);

/*
    //get the playernames
    const playersCollectionRef = collection(
      db,
      `/players/22-23/${selectedSeason}/${selectedSport}/players`
    );
    const data = await getDocs(playersCollectionRef).then((res) => {
      console.log("success", res);
      setPlayers(res.docs.map((doc) => ({ ...doc.data() })));
      console.log(players);

      
    });
      
         1.List all players of this sport,
    2.let the user select a player,
    3. get the id of the player
    4. add the player to the schedule 

    
    */
  }, []);/*
  function picTeamone(teamone){
      if(teamone == "SJAJ"){
        setPhototeamone("https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC");
      } else if(teamone == "KISJ"){
        setPhototeamone("https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ");
      } else if (teamone == "NLCS"){
        setPhototeamone("https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC");
      } else if (teamone=="BHA"){
        setPhototeamone("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
      } else {
        console.log("Team doesn't exist?")
      }
  }

  function picTeamtwo(teamtwo){
      if(teamtwo == "SJAJ"){
        setPhototeamtwo("https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC");
      } else if(teamtwo == "KISJ"){
        setPhototeamtwo("https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ");
      } else if (teamtwo == "NLCS"){
        setPhototeamtwo("https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC");
      } else if (teamtwo=="BHA"){
        setPhototeamtwo("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
      } else {
        console.log("Team doesn't exist?")
      }
  }*/

var thumbnail =`https://img.youtube.com/vi/${url1}/hqdefault.jpg`;
var thumbnail2 =`https://img.youtube.com/vi/${url2}/hqdefault.jpg`;

  return (
    <Container className="spaddingfix">
     <Segment>
    <h1>Stream for {name1}</h1>
    <Container className="spaddingfix">
      <Grid>
        <Grid.Column width={16}>
        <Embed
          className="roundededge"
            id={url1}
            placeholder={thumbnail}
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
          />
        </Grid.Column>
        
      </Grid>
    </Container>
    
    </Segment>
    <Segment>
    <h1>Stream for {name2}</h1>
    <Container className="spaddingfix">
      <Grid>
        <Grid.Column width={16}>
        <Embed
          className="roundededge"
            id={url2}
            placeholder={thumbnail2}
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
          />
        </Grid.Column>
        
      </Grid>
    </Container>
    
    </Segment>
  </Container>
   
   
  );
};

export default ScheduleDetail;
