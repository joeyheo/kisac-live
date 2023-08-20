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
import DataVisualizer from "./CompetitionVisualizer";

const DropdownChoice = ({selectedCompetition}) => {
  const sportSelectRef = useRef();


  const handleForm = (e) => {
    const id = e.target.value;
    console.log(id);

    if (id.substr(0, 2) == "competition") {
      setSelectedCompetition(id);
      console.log("slected season");
      console.log(sportSelectRef.current);
      sportSelectRef.current.value = "default";
    } else {
      setSelectedCompetition(id);
    }
  };
  return (
    <div>
      
      <form onChange={handleForm}>
        <select name="competition" id="competition">
          <option value="" selected disabled hidden>
            Choose the Competition
          </option>
          <option value="volleyball">JIT</option>
          <option value="tennis">KISAC</option>
        </select>
      </form>
    </div>
  );
};

const ScheduleUpdater = () => {
  const [selectedCompetition, setSelectedCompetition] = useState("");
  const [csvData, setCsvData] = useState(null);
  const handleUpload = async () => {
    const batch = writeBatch(db);

    console.log(csvData);

    if (selectedCompetition != "") {
      csvData.forEach((player) => {
        var docRef = doc(
          collection(
            db,
            `/competition/${selectedCompetition}/${selectedCompetition}`
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
        selectedCompetition={selectedCompetition}
        setSelectedCompetition={setSelectedCompetition}
      />

      <CSVParser data={setCsvData} />

      {csvData != null ? <DataVisualizer data={csvData} /> : null}
      <Button onClick={handleUpload}>Upload</Button>
    </Container>
  );
};

export default PlayerUpdater;
