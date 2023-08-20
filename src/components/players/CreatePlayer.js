import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import moment from "moment";
import { addDoc, doc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const date_create = moment().format("YYYY-MM-DDThh:mm");

const CreatePlayer = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [sport, setSport] = useState("badminton");
  const [date, setDate] = useState(date_create);
  const [jv, setJv] = useState(false);
  const [school, setSchool] = useState("SJAJ");
  const [grade, setGrade] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");

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

    console.log(name, image, sport, date, jv, grade, number, sex);
    const theDate = new Date(date)

    const docRef = await addDoc(collection(db, `/schedules/22-23/${season}/${sport}/players`), {
        name: name,
        image: image,
        school: school,
        grade: grade,
        jv: jv,
        sport: sport,
        number: number,
        sex: sex,
        createdAt: serverTimestamp(),

      }).then(()=>{
        console.log("succesfully created a player");
      }).catch((err)=>{console.log(err);});
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
      >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required size="10" onChange={(e)=>setName(e.target.value)} value={name} />
        <label for="image">Image Link:</label>
        <input type="text" id="image" name="image" required size="10" onChange={(e)=>setImage(e.target.value)} value={image} />
<Form.Group>
<label for="JV">JV?</label>
        <input type="checkbox" id="JV" name="JV"
             onChange={(e)=>setJv(e.target.checked)}  value={jv}/>
</Form.Group>
        

        <label for="school">Select School 1</label>
        <select name="school" id="school" required onChange={(e)=>setSchool(e.target.value)} value={school}>
          <option value="SJAJ">SJAJ</option>
          <option value="KISJ">KISJ</option>
          <option value="NLCS">NLCS</option>
          <option value="BHA">BHA</option>
        </select>
        <label for="sex">Select Gender</label>
        <select name="sex" id="sex" required onChange={(e)=>setSex(e.target.value)} value={sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
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

        <label for="number">Player Number:</label>
        <input type="text" id="number" name="number" required size="10" onChange={(e)=>setNumber(e.target.value)} value={number} />

        <label for="grade">Grade:</label>
        <input type="text" id="grade" name="grade" required size="10" onChange={(e)=>setGrade(e.target.value)} value={grade} />
        <input type="submit" />
      </Form>
    </Container>
  );
};

export default CreatePlayer;
