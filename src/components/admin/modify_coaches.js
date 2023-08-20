// KISAC.LIVE V2 CLIENT
// Modify Coaches
import React, { Component } from "react";
import { useCSVReader } from "react-papaparse";
import { useEffect, useState } from "react/cjs/react.development";
//import { Button, Container, Table } from "react-bootstrap";
import { Button, Container, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../App.css';

export default function CreateCoaches() {
  const [csvData, setCsvData] = useState([]);
  const [coaches, setCoaches] = useState({});
  const emptyObject = {};
  const onClear = () => {
    setCsvData([]);
  };
  const onUploadButton = () => {
    axios
      .post("https://kisac-live.herokuapp.com/api/coaches/many", coaches)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error in CreateCoaches!", err);
      });
    console.log("complete");
    setCsvData([]);
    setCoaches([]);
  };

  const handleOnDrop = (data) => {
    setCsvData(data);
    let coachList = [];

    data.map((item) =>
      coachList.push({
        coachimage: item.data[0],
        coachname: item.data[1],
        school: item.data[2],
        sport: item.data[3],
        division: item.data[4],
      })
    );

    console.log("onDrop");
    setCoaches(coachList);

    console.log("coach object", coaches);

    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
    console.log("del", csvData);
  };

  const { CSVReader } = useCSVReader();

  return (
    <Container>
      <Link to="/show-coach">
        <Button>Show Coach List</Button>
      </Link>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor="#659cef"
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
      <Table table>
        <thead>
          {csvData.map((item, index) =>
            index < 1 ? (
              <tr key="index">
                <td>#</td>
                {item.data.map((item) => (
                  <th>{item}</th>
                ))}
              </tr>
            ) : null
          )}
        </thead>
        <tbody>
          {csvData.map((item, index) =>
            index > 0 ? (
              <tr key={index}>
                <td>{index}</td>
                {item.data.map((item) => (
                  <td>{item}</td>
                ))}
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
      <Button onClick={onClear}>Clear Csv state</Button>
      <Button onClick={onUploadButton}>Upload</Button>
    </Container>
  );
  //return <SheetForm handleFile={handleFileCallback} />;
}