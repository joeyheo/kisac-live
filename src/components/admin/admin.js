// KISAC.LIVE V2 CLIENT
// Admin Dashboard
import "../../App.css";
import { Tab, Button, Divider } from "semantic-ui-react";
import React, { useState } from "react";
import CSVParser from "./CSVParser";
import { db } from "../../firebase/firebaseConfig";
import {
  writeBatch,
  collection,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import DataVisualizer from "./DataVisualizer";
import CompetitionVisualizer from "./CompetitionVisualizer";
import CreateSchedule from "../schedule/CreateSchedule";
import CreatePlayer from "../players/CreatePlayer";
import CreatePost from "../home/CreatePost";
//import CreateCoaches from "./modify_coaches";
// COACH
import { Link } from "react-router-dom";

const CoachUploadBulk = () => {
  const [csvData, setCsvData] = useState(null);

  console.log("Coach", csvData);

  const handleUpload = async () => {
    const batch = writeBatch(db);

    console.log(csvData);

    csvData.forEach((coaches) => {
      var docRef = doc(collection(db, "coaches")); //automatically generate unique id
      coaches.createdAt = serverTimestamp();
      batch.set(docRef, coaches);
    });

    await batch
      .commit()
      .then(() => {
        alert(`succesfully uploaded the player data to the database`);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <CSVParser data={setCsvData}></CSVParser>
      {csvData != null ? <DataVisualizer data={csvData} /> : null}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

//PLAYER BULK

const PlayerBulkUpload = () => {
 
  const [csvData, setCsvData] = useState(null);
  const [sport, setSport] = useState("badminton");
  console.log("ppooopy", csvData);

  const handleUpload = async () => {
    let season;
    switch (sport) {
      case "tennis":
        season = "season1";
        break;
      case "pingpong":
        season = "season1";
        break;
      case "volleyball":
        season = "season1";
        break;
      case "swimming":
        season = "season1";
        break;
      case "basketball":
        season = "season2";
        break;
      case "pingpong":
        season = "season2";
        break;
      case "swimming":
        season = "season2";
        break;
      case "soccer":
        season = "season3";
        break;
        case "tennis":
        season = "season3";
        break;
        case "swimming":
        season = "season3";
        break;
        case "badminton":
        season = "season3";
        break;

      default:
        break;
    }
    const batch = writeBatch(db);

    console.log(csvData);

    csvData.forEach((player) => {
      var docRef = doc(collection(db, `/players/22-23/${season}/${sport}/players`)); //automatically generate unique id
      player.createdAt = serverTimestamp();
      batch.set(docRef, player);
    });

    await batch
      .commit()
      .then(() => {
        
        alert(`succesfully uploaded the player data to the database`);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
       <label for="sport">Select the sport</label>
        <select name="sport" id="sport" required onChange={(e)=>setSport(e.target.value)} value={sport}>
          <option selected value="badminton">Badminton</option>
          <option value="baseball">Baseball</option>
          <option value="basketball">Basketball</option>
          <option value="soccer">Soccer</option>
          <option value="swimming">Swimming</option>
          <option value="pingpong">Table Tennis</option>
          <option value="tennis">Tennis</option>
          <option value="volleyball">Volleyball</option>
        </select>
      <CSVParser data={setCsvData}></CSVParser>
      {csvData != null ? <DataVisualizer data={csvData} /> : null}
      <Button onClick={handleUpload} >Upload</Button>
    </div>
  );
};

//SCHEDULE BULK
const ScheduleBulkUpload = () => {
  const [csvData, setCsvData] = useState(null);

  console.log("ppooopy", csvData);

  const handleUpload = async () => {
    const batch = writeBatch(db);

    console.log(csvData);

    csvData.forEach((player) => {
      var docRef = doc(collection(db, "competition")); //automatically generate unique id
      player.createdAt = serverTimestamp();
      batch.set(docRef, player);
    });

    await batch
      .commit()
      .then(() => {
        alert(`succesfully uploaded the player data to the database`);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <CSVParser data={setCsvData}></CSVParser>
      {csvData != null ? <CompetitionVisualizer data={csvData} /> : null}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

const panes = [
  { menuItem: "Post", render: () => <Tab.Pane>Post 
    <CreatePost/>
  </Tab.Pane> },
  {
    menuItem: "Player",
    render: () => (
      <Tab.Pane>
        Individual Player Post 
        <CreatePlayer/>
        <Divider/>
        Bulk Player Post
        <PlayerBulkUpload />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Schedule",
    render: () => (
      <Tab.Pane>
        Individual Schedule Post
        <CreateSchedule/>
        <Divider />
        Bulk Schedule Post
        <ScheduleBulkUpload />
      </Tab.Pane>
    ),
  },
  { menuItem: "LiveScore", render: () => <Tab.Pane>LiveScore</Tab.Pane> },
  
];

const TabExampleBasic = () => <Tab panes={panes} />;

// MAIN FUNCTION
export default function Home() {
  return (
    <>
      <div class="ui centered grid">
        
        <div class="one fifteen wide column watch">
          <div class="ui segment">
            <h1>Administrator Dashboard</h1>
            <TabExampleBasic />
          </div>
        </div>
      </div>
    </>
  );
}
