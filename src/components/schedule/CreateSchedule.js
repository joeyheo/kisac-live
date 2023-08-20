import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import moment from "moment";
import { addDoc, doc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const date_create = moment().format("YYYY-MM-DDThh:mm");

const CreateSchedule = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [sport, setSport] = useState("badminton");
  const [date, setDate] = useState(date_create);
  const [jv, setJv] = useState(false);
  const [sch1, setSch1] = useState("SJAJ");
  const [sch2, setSch2] = useState("SJAJ")

  const handleSubmit = async(e) => {
    e.preventDefault();
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

    console.log(name, url, sport, date, jv, sch1, sch2);
    const theDate = new Date(date)

    const docRef = await addDoc(collection(db, `/schedules/22-23/${season}/${sport}/schedules`), {
        name: name,
        livevideourl: url,
        sch1: sch1,
        sch2: sch2,
        jv: jv,
        sport: sport,
        createdAt: serverTimestamp(),
        timestart: Timestamp.fromDate(theDate),
        score:"00:00"

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
<Form.Group>
<label for="JV">JV?</label>
        <input type="checkbox" id="JV" name="JV"
             onChange={(e)=>setJv(e.target.checked)}  value={jv}/>
</Form.Group>
        

        <label for="sch1">Select School 1</label>
        <select name="sch1" id="sch1" required onChange={(e)=>setSch1(e.target.value)} value={sch1}>
          <option value="SJAJ">SJAJ</option>
          <option value="KISJ">KISJ</option>
          <option value="NLCS">NLCS</option>
          <option value="BHA">BHA</option>
        </select>
        <label for="sch2">Select School 2</label>
        <select name="sch2" id="sch2" required onChange={(e)=>setSch2(e.target.value)} value={sch2}>
          <option value="SJAJ">SJAJ</option>
          <option value="KISJ">KISJ</option>
          <option value="NLCS">NLCS</option>
          <option value="BHA">BHA</option>
        </select>



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
