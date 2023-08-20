// KISAC.LIVE V2 CLIENT
// This is the main players page.

import React, { Component, useEffect, useState, useRef } from "react";
import "../../App.css";
import { Container, Grid,Segment } from "semantic-ui-react";
import TallAd from "../etc/advertisement/tall_ad";
import { Link } from "react-router-dom";
import PlayerCard from "./player_card";
// IMAGE IMPORT
import irene from "../../resources/images/24_IreneYang.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
const DropdownChoice = ({
  selectedSeason,
  setSelectedSeason,
  selectedSport,
  setSelectedSport,
  onSubmit,
}) => {
  const sportSelectRef = useRef();

  //console.log(selectedSeason, selectedSport);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleForm = (e) => {
    const id = e.target.value;
    console.log(id);

    if (id.substr(0, 6) == "season") {
      setSelectedSeason(id);
    //  console.log("slected season");
    //  console.log(sportSelectRef.current);
      sportSelectRef.current.value = "default";
    } else {
      setSelectedSport(id);
    }
  };
  return (
    <div>
      <form>
        <select name="year" id="year">
          <option selected value="22-23">
            2022-2023
          </option>
          <option value="23-24">2023-2024</option>
          <option value="24-25">2024-2025</option>
          <option value="25-26">2025-2026</option>
        </select>
      </form>

      <form onChange={handleForm} onSubmit={handleSubmit}>
        <select name="season" id="season">
          <option value="" selected disabled hidden>
            Choose the season
          </option>
          <option value="season1">Season 1</option>
          <option value="season2">Season 2</option>
          <option value="season3">Season 3</option>
        </select>
        <select name="sport" id="sport" ref={sportSelectRef}>
          <option value="default" selected disabled hidden>
            Choose the sport
          </option>
          <option disabled={selectedSeason != "season1"} value="tennis">
            Tennis
          </option>
          <option disabled={selectedSeason != "season1"} value="pingpong">
            Table Tennis
          </option>
          <option disabled={selectedSeason != "season1"} value="volleyball">
            Volleyball
          </option>
          <option disabled={selectedSeason != "season1"} value="swimming">
            Swimming
          </option>
          <option disabled={selectedSeason != "season2"} value="basketball">
            Basketball
          </option>
          <option disabled={selectedSeason != "season2"} value="swimming">
            Swimming
          </option>
          <option disabled={selectedSeason != "season2"} value="pingpong">
            Table Tennis
          </option>
          <option disabled={selectedSeason != "season3"} value="soccer">
            Soccer
          </option>
          <option disabled={selectedSeason != "season3"} value="badminton">
            Badminton
          </option>
          <option disabled={selectedSeason != "season3"} value="swimming">
            Swimming
          </option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

function ShowPlayerCard() {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    if (selectedSeason != "" && selectedSport != "") {
      console.log("da");
      const playersCollectionRef = collection(
        db,
        `/players/22-23/${selectedSeason}/${selectedSport}/players`
      );
      const data = await getDocs(playersCollectionRef).then((res) => {
        console.log("success", res);
        setPlayers(res.docs.map((doc) => ({ ...doc.data() })));
        console.log(players)
      });
      
    }
  };

  //console.log( players);
  let playerList;

  if (!players) {
    playerList = "there is no player recored!";
  } else {
    //console.log(players.length);
    playerList = players.map((players, k) => (
      <PlayerCard className="col-4" player={players} key={k} />
    ));
  }

  return (
    <div className="ShowPlayerList">
      <Container>
        <h1>Show Players</h1>
        <DropdownChoice
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
          selectedSport={selectedSport}
          setSelectedSport={setSelectedSport}
          onSubmit={getPlayers}
        />
        <Segment>
        <Grid colums={3}>
    {players.map((players, k) => (
      <Grid.Column width={5}>
         <PlayerCard className="col-4" player={players} key={k} />
      </Grid.Column>
    ))}
  </Grid>
          
        </Segment>
         
       
      </Container>
    </div>
  );
}

// MAIN FUNCTION
export default function Players() {
  return (
    <div className="paddingfix">
      <div class="ui grid">
        <Grid columns="equal">
          <Grid.Column width={12}>
            <h3>SCHOOL BOYS/GIRLS SPORTS Roster</h3>
            <p style={{ color: "grey" }}>Team Roster</p>
            <ShowPlayerCard />
          </Grid.Column>
          <Grid.Column>
            <TallAd />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
