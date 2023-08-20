// KISAC.LIVE V2 CLIENT
// import it by <ScheduleTable/>

import React from "react";
import "../../App.css";
import { Table } from "semantic-ui-react";

export default function ScheduleTable() {
    return (
        <Table basic='very' class="scheduleTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Teams</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Place</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            <Table.Cell>KISJ VS SJAJ</Table.Cell>
            <Table.Cell>Aug 8</Table.Cell>
            <Table.Cell>12:30 PM</Table.Cell>
            <Table.Cell>KISJ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>BHA VS SJAJ</Table.Cell>
            <Table.Cell>Aug 9</Table.Cell>
            <Table.Cell>12:30 PM</Table.Cell>
            <Table.Cell>SJAJ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>NLCS VS SJAJ</Table.Cell>
            <Table.Cell>Aug 10</Table.Cell>
            <Table.Cell>12:30 PM</Table.Cell>
            <Table.Cell>SJAJ</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
}