import React, { useRef } from "react";
import { Button, Container, TextArea } from "semantic-ui-react";
import { useState } from "react";
import CSVParser from "./CSVParser";
import { Dropdown, Menu } from "semantic-ui-react";
import Select from "react-select";
import {
  getDoc,
  doc,
  writeBatch,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { async } from "@firebase/util";
import DataVisualizer from "./DataVisualizer";

const DropdownChoice = ({selectedSeason, setSelectedSeason, selectedSport, setSelectedSport}) => {
  const sportSelectRef = useRef();

  console.log(selectedSeason, selectedSport);

  const handleForm = (e) => {
    const id = e.target.value;
    console.log(id);

    if (id.substr(0, 6) == "season") {
      setSelectedSeason(id);
      console.log("slected season");
      console.log(sportSelectRef.current);
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

      <form onChange={handleForm}>
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
      </form>
    </div>
  );
};

const PlayerUpdater = () => {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [csvData, setCsvData] = useState(null);
  const handleUpload = async () => {
    const batch = writeBatch(db);

    console.log(csvData);

    if (selectedSeason != "" && selectedSport != "") {
      csvData.forEach((player) => {
        var docRef = doc(
          collection(
            db,
            `/players/22-23/${selectedSeason}/${selectedSport}/players`
          )
        ); //automatically generate unique id
        player.createdAt = serverTimestamp();
        batch.set(docRef, player);
      });
      await batch
        .commit()
        .then(() => {
          console.log("succesfully uploaded the player data to the database");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Container>
      <h1>Upload Players</h1>
      <DropdownChoice
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
      />

      <CSVParser data={setCsvData} />

      {csvData != null ? <DataVisualizer data={csvData} /> : null}
      <Button onClick={handleUpload}>Upload</Button>
    </Container>
  );
};

export default PlayerUpdater;
