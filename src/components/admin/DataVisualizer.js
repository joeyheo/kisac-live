import React from "react";

const DataVisualizer = ({ data: csvData }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Player Image</th>
          <th>Name</th>
          <th>School</th>
          <th>Sports</th>
          <th>Grade</th>
          <th>Division</th>
          <th>Player Number</th>
          <th>Sex</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {csvData.map((player, index) => (
          <tr key={player.id}>
            <td data-label="Image">{player.image}</td>
            <td data-label="Name">{player.name}</td>
            <td data-label="School">{player.school}</td>
            <td data-label="Sports">{player.sport}</td>
            <td data-label="Grade">{player.grade}</td>
            <td data-label="Division">{player.division}</td>
            <td data-label="Number">{player.playernumber}</td>
            <td data-label="Sex">{player.sex}</td>
            <td data-label="ID">{player.id}</td>
          </tr>
        ))}

       
      </tbody>
    </table>
  );
};

export default DataVisualizer;
