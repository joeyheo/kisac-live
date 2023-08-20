import React from "react";

const CompetitionVisualizer = ({ data: csvData }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Team One</th>
          <th>Team Two</th>
          <th>Team One Score</th>
          <th>Team Two Score</th>
          <th>Name</th>
          <th>Live Url Id</th>
          <th>Quat</th>
          <th>Live</th>
        </tr>
      </thead>
      <tbody>
        {csvData.map((schedule, index) => (
          <tr key={schedule.id}>
            <td data-label="Team One">{schedule.teamone}</td>
            <td data-label="Team Two">{schedule.teamtwo}</td>
            <td data-label="Team One Score">{schedule.teamonescore}</td>
            <td data-label="Team Two Score">{schedule.teamtwoscore}</td>
            <td data-label="Name">{schedule.name}</td>
            <td data-label="Live Url ID">{schedule.url}</td>
            <td data-label="Quat">{schedule.quat}</td>
            <td data-label="Live">{schedule.live}</td>
          </tr>
        ))}

       
      </tbody>
    </table>
  );
};

export default CompetitionVisualizer;
