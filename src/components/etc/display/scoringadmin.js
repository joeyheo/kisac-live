

import React, { useEffect, useState } from "react";
import "../../../App.css";
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
import { db } from "../../../firebase/firebaseConfig";
import { map } from "@firebase/util";
import moment, { Moment } from "moment";
import {Link, useNavigate} from 'react-router-dom';
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
    setSelectedSport(e.target.value);

    let season;
    switch (e.target.value) {
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

    const q = query(
      collection(db, `/schedules/22-23/${season}/${e.target.value}/schedules`), where('timestart', '>=', new Date(year+ "-"+ month +"-" +date)), orderBy("timestart")
    );
    const querySnapshot = await getDocs(q);
     somethingtoreturn = `/schedules/22-23/${season}/${e.target.value}/schedules`;

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
    <div>
      <label for="sport">Select the sport</label>
      <select
        name="sport"
        id="sport"
        required
        onChange={(e) => onDropDownChange(e)}
        value={selectedSport}
      >
        <option value="default" hidden>Choose the sport</option>
        <option value="badminton">Badminton</option>
        <option value="baseball">Baseball</option>
        <option value="basketball">Basketball</option>
        <option value="soccer">Soccer</option>
        <option value="swimming">Swimming</option>
        <option value="pingpong">Table Tennis</option>
        <option value="tennis">Tennis</option>
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
            
              <a onClick={()=>{navigate(`/schedules/${schedule.id}`, {state:{name: somethingtoreturn}})}}>
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
  );
}
