import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import moment from "moment";
import { addDoc, doc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const date_create = moment().format("YYYY-MM-DDThh:mm");

const CreateSchedule = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [sport, setSport] = useState("volleyball");
  const [date, setDate] = useState(date_create);
  const [sch1, setSch1] = useState("SJAJ");
  const [sch2, setSch2] = useState("SJAJ");
  const [sch1score, setSch1score] = useState(0);
  const [sch2score, setSch2score] = useState(0);
  const [sch1win, setSch1win] = useState(0);
  const [sch2win, setSch2win] = useState(0);
  const [live, setLive] = useState(false);
  const [quat, setQuat] = useState(1);

  const handleSubmit = async(e) => {
    e.preventDefault();
    switch (sport) {
      case "tennis":
        break;
      case "volleyball":
        break;
    
      default:
        break;
    }

    console.log(name, url, sport, date, sch1score, sch2score, sch1, sch2);
    const theDate = new Date(date)

    const docRef = await addDoc(collection(db, `/competition/${sport}/${sport}`), {
        name: name,
        livevideourl: url,
        sch1: sch1,
        sch2: sch2,
        sch1score: sch1score,
        sch2score: sch2score,
        sport: sport,
        live: live,
        quat: quat,
        sch1win: sch1win,
        sch2win: sch2win,
        createdAt: serverTimestamp(),
        timestart: Timestamp.fromDate(theDate)

      }).then(()=>{
        console.log("succesfully created a schdule");
      }).catch((err)=>{console.log(err);});
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
      >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required size="10" onChange={(e)=>setName(e.target.value)} value={name} />
        <label for="videoURL">LIVE URL:</label>
        <input type="text" id="videoURL" name="videoURL" required size="10" onChange={(e)=>setUrl(e.target.value)} value={url} />

        <label for="sch1">Select School 1</label>
        <select name="sch1" id="sch1" required onChange={(e)=>setSch1(e.target.value)} value={sch1}>
          <option value="SIS">SIS</option>
          <option value="KIS">KIS</option>
          <option value="NLCS">NLCS</option>
          <option value="BHA">BHA</option>
          <option value="BHA2">BHA2</option>
          <option value="SJAJ">SJAJ</option>
          <option value="KISJ">KISJ</option>
          <option value="FPS">FPS</option>
          <option value="DCS">DCS</option>
          <option value="BIS">BIS</option>
          <option value="GSIS">GSIS</option>
          <option value="CI">CI</option>

        </select>
        <label for="sch2">Select School 2</label>
        <select name="sch2" id="sch2" required onChange={(e)=>setSch2(e.target.value)} value={sch2}>
        <option value="SIS">SIS</option>
          <option value="KIS">KIS</option>
          <option value="NLCS">NLCS</option>
          <option value="BHA">BHA</option>
          <option value="BHA2">BHA2</option>
          <option value="SJAJ">SJAJ</option>
          <option value="KISJ">KISJ</option>
          <option value="FPS">FPS</option>
          <option value="DCS">DCS</option>
          <option value="BIS">BIS</option>
          <option value="GSIS">GSIS</option>
          <option value="CI">CI</option>
        </select>



        <label for="sport">Select the sport</label>
        <select name="sport" id="sport" required onChange={(e)=>setSport(e.target.value)} value={sport}>
          <option selected value="volleyball">Volleyball</option>
          <option value="tennis">Tennis</option>
          
        </select>

        <label for="schedule" required>
          Choose a time for your schedule:{" "}
        </label>
        <input
          type="datetime-local"
          id="schdule"
          name="schdule"
          value={date}
          min={date_create}
          onChange={(e)=>setDate(e.target.value)}

        />

        <input type="submit" />
      </Form>
    </Container>
  );
};

export default CreateSchedule;
