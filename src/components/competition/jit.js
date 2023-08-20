// KISAC.LIVE V2 CLIENT
// import it by

import React, { useEffect, useState } from "react";
import "../../App.css";
import {
  Dropdown,
  Menu,
  Container,
  Image,
  Button,
  Tab,
  Table,
} from "semantic-ui-react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { map } from "@firebase/util";
import moment, { Moment } from "moment";
import {Link, useNavigate} from 'react-router-dom';
import Placeholder from "../etc/indev/placeholder";
import Placeholder2 from "../etc/indev/placeholder2";
let somethingtoreturn ="";
export default function ScheduleGallary() {
  const [schedules, setSchedules] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [live, setLive] = useState();
  const event = new Date();
  let date = event.getDate();
  let month = event.getMonth() + 1;
  let year = event.getFullYear();
  
  console.log(year,month,date);
  const onDropDownChange = async (e) => {

    const q = query(
      collection(db, `/competition/volleyball/volleyball`), where('timestart', '>=', new Date(year+ "-"+ month +"-" +date)), orderBy("timestart")
    );
    const querySnapshot = await getDocs(q);
     somethingtoreturn = `/competition/volleyball/volleyball`;

    const schedulesTempList = [];
    querySnapshot.forEach((doc) => {
      
      // doc.data() is never undefined for query doc snapshots
      const fdate = moment(doc.data().timestart.toDate()).format(
        "YYYY-MM-DDThh:mm"
      );
      console.log(doc.id, " => ", doc.data(), "=>", fdate);
      schedulesTempList.push(doc);
    });
    setSchedules(schedulesTempList);
  };
  console.log(somethingtoreturn);
  const navigate = useNavigate();
  
  return (
    <div class="ui grid">
<Placeholder/>
        <div class="three nine wide column">

        <label for="sport">Select the sport</label>
      <select
        name="sport"
        id="sport"
        required
        onChange={(e) => onDropDownChange(e)}
        value={selectedSport}
      >
        <option value="default" hidden>Choose the sport</option>
        <option value="volleyball">Volleyball</option>
      </select>
      <div class="cards">
        {schedules.map((schedule, index) => (
          <div class="ui fluid card" key={index}>
            <div class="content">
              {schedule.data().name}
              <br />
              <b>
                {moment(schedule.data().timestart.toDate()).format("YYYY-MM-DD")}
              </b>

              <span className="navSpan">
            
              <a onClick={()=>{navigate(`/jit/${schedule.id}`, {state:{name: somethingtoreturn}})}}>
                <Button basic color="blue">
                 Live
                </Button>
                </a>
              </span>
              <span className="scoreSpan">{`${schedule.data().sch1score}:${schedule.data().sch2score}`}</span>
              <span className="teamSpan">{`${schedule.data().sch1} vs ${
                schedule.data().sch2
              }`}</span>
              <br />
              {moment(schedule.data().timestart.toDate()).format("hh:mm")}
            </div>
          </div>
        ))}
      </div>
        </div>
     <Placeholder2/>
    </div>
  );
}
