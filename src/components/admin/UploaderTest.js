import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import CSVParser from "./CSVParser";
import { db } from "../../firebase/firebaseConfig";
import { writeBatch, collection, doc, serverTimestamp } from "firebase/firestore";
import DataVisualizer from "./DataVisualizer";


const UploaderTest = () => {
  const [csvData, setCsvData] = useState(null);

  console.log("ppooopy", csvData);

  const handleUpload = async () => {
    const batch = writeBatch(db);

    console.log(csvData);

    csvData.forEach((player) => {
      var docRef = doc(collection(db, "/players/22-23/season0/bruhsport/players")); //automatically generate unique id
      player.createdAt = serverTimestamp()
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
  };

  return (
    <div>
      <CSVParser data={setCsvData}></CSVParser>
      {csvData != null ? <DataVisualizer data={csvData} /> : null}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default UploaderTest;
