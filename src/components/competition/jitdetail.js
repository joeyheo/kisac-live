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
  const [phototeamone, setPhototeamone] = useState();
  const [phototeamtwo, setPhototeamtwo] = useState();
  const [players, setPlayers] = useState([]);
  const [teamone, setTeamone] = useState([]);
  const [teamtwo, setTeamtwo] = useState([]);
  const [teamonescore, setTeamonescore] = useState([]);
  const [teamtwoscore, setTeamtwoscore] = useState([]);
  const [name, setName] = useState();
  const [quat, setQuat] = useState(1);
  const [live, setLive] = useState();
  const [url, setUrl] = useState();
  let { scheduleId } = useParams();
  const location = useLocation();



  useEffect(() => {
    //get the scedule
    getDoc(doc(db, "/competition/volleyball/volleyball"+`/${scheduleId}`)).then(docSnap => {
      if (docSnap.exists()) {
        const datarecieved = docSnap.data();
        console.log("hi");
        console.log(datarecieved);
        setTeamone(datarecieved.sch1);
        setTeamtwo(datarecieved.sch2);
        setName(datarecieved.name);
        setUrl(datarecieved.livevideourl);
        setTeamonescore(datarecieved.sch1score);
        setTeamtwoscore(datarecieved.sch2score);
        setQuat(datarecieved.quat);
        //If Statement to select the image of that will be displayed in the main page;
        //Team 1 - if Loop
        if(datarecieved.live == false){
          setLive("Offline");
        } else {
          setLive("Live");
        }
        if(datarecieved.sch1 == "SJAJ"){
          setPhototeamone("https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC");
        } else if(datarecieved.sch1 == "KISJ"){
          setPhototeamone("https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ");
        } else if (datarecieved.sch1 == "NLCS"){
          setPhototeamone("https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC");
        } else if (datarecieved.sch1 == "BHA"){
          setPhototeamone("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
        } else if (datarecieved.sch1 == "BIS"){
        setPhototeamone("https://drive.google.com/uc?id=1Tjz8c1eHf1IykB_xdTZ96hK9g3aeqcl5");
        } else if (datarecieved.sch1 == "FPS"){
            setPhototeamone("https://drive.google.com/uc?id=1_91A4fPva-VT7OI54EHgS8VXHvCkofuw");
        } else if (datarecieved.sch1 == "SIS"){
            setPhototeamone("https://drive.google.com/uc?id=1p_SXCSpAeuitTfggNX_EGOIF6WNIk4sz");
        } else if (datarecieved.sch1 == "CI"){
            setPhototeamone("https://drive.google.com/uc?id=1RLQZXhKHjS69Ee6S5UHj2bmHCWiPaZYU");
        } else if (datarecieved.sch1 == "DCS"){
            setPhototeamone("https://drive.google.com/uc?id=1O1IqnA0mzJuAyNHHn3LMXKuerFnFVK-d");
        } else if (datarecieved.sch1 == "GSIS"){
            setPhototeamone("https://drive.google.com/uc?id=1v5w1jOAQqyOx5oiaV5HipPw1MtU2EXWh");
        } else if (datarecieved.sch1 == "BHA2"){
            setPhototeamone("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
        } else if (datarecieved.sch1 == "KIS"){
            setPhototeamone("https://drive.google.com/uc?id=1oeCZ7PG4EJpYufuh2iuk47i9qs_L6ioe");
        } 
        //Team 2 - if Loop
        if(datarecieved.sch2 == "SJAJ"){
          setPhototeamtwo("https://drive.google.com/uc?id=1X-YKyB3R-Tkw_vDlA_kh1vENeFaewWKC");
        } else if(datarecieved.sch2 == "KISJ"){
          setPhototeamtwo("https://drive.google.com/uc?id=1jRibiAs2zfkugzTHGV5lfqLLTcJcUGoJ");
        } else if (datarecieved.sch2 == "NLCS"){
          setPhototeamtwo("https://drive.google.com/uc?id=1FLXypMq1WqYGtGKIm87XwHS7KAU64ClC");
        } else if (datarecieved.sch2=="BHA"){
          setPhototeamtwo("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
        } else if (datarecieved.sch2 == "BIS"){
            setPhototeamtwo("https://drive.google.com/uc?id=1Tjz8c1eHf1IykB_xdTZ96hK9g3aeqcl5");
        } else if (datarecieved.sch2 == "FPS"){
            setPhototeamtwo("https://drive.google.com/uc?id=1_91A4fPva-VT7OI54EHgS8VXHvCkofuw");
            } else if (datarecieved.sch2 == "SIS"){
                setPhototeamtwo("https://drive.google.com/uc?id=1p_SXCSpAeuitTfggNX_EGOIF6WNIk4sz");
            } else if (datarecieved.sch2 == "CI"){
                setPhototeamtwo("https://drive.google.com/uc?id=1RLQZXhKHjS69Ee6S5UHj2bmHCWiPaZYU");
            } else if (datarecieved.sch2 == "DCS"){
                setPhototeamtwo("https://drive.google.com/uc?id=1O1IqnA0mzJuAyNHHn3LMXKuerFnFVK-d");
            } else if (datarecieved.sch2 == "GSIS"){
                setPhototeamtwo("https://drive.google.com/uc?id=1v5w1jOAQqyOx5oiaV5HipPw1MtU2EXWh");
            } else if (datarecieved.sch2 == "BHA2"){
                setPhototeamtwo("https://drive.google.com/uc?id=13thMr0m21CH1qgTWvw2_Z4XKR7dfb5jK");
            } else if (datarecieved.sch2 == "KIS"){
                setPhototeamtwo("https://drive.google.com/uc?id=1oeCZ7PG4EJpYufuh2iuk47i9qs_L6ioe");
            } 
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

var thumbnail =`https://img.youtube.com/vi/${url}/hqdefault.jpg`;

  return (
    <Container className="spaddingfix">
     <Segment>
    <h1>Schedule detail for {name}</h1>
    <Container className="spaddingfix">
      <Grid>
        <Grid.Column width={10}>
        <Embed
          className="roundededge"
            id={url}
            placeholder={thumbnail}
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Grid centered columns={3} row={2}>
            <Grid.Row>
              <Grid.Column width={6}>
                <Card>
  
                  <Image
                    src={phototeamone}
          
                  />
                  <Card.Content>
                    <Card.Header className="centerfont">{teamone}</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={4}>
                <Card className="smallerfont">
                  <Label as="a" color="red" attached="top">
                    {live}
                  </Label>
                  <Card.Content className="smallerfont">
                    <Card.Header className="smallerfont">{quat}</Card.Header>
                  </Card.Content>
                </Card>
                
              </Grid.Column>
              <Grid.Column width={6}>
                <Card>
                  <Image
                    src={phototeamtwo}
                  />
                  <Card.Content>
                    <Card.Header className="centerfont">{teamtwo}</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated='left' width={6}>
                <Card>
                  <Card.Content>
                    <Card.Header className="centerfont">{teamonescore}</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Card>
                  <Card.Content>
                    <Card.Header className="centerfont">{teamtwoscore}</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
          </Grid>
      </Grid.Column>
      </Grid>
    </Container>
    
    </Segment>
  </Container>
   
   
  );
};

export default ScheduleDetail;
