// KISAC.LIVE V2 CLIENT
// This is the main schedule page

import React from "react";
import "../../App.css";
import { Dropdown, Menu, Container, Image, Button, Tab } from "semantic-ui-react";
import ScheduleTable from "./table_schedule";
import ScheduleGallary from "./gallary_schedule";
import TallAd from "../etc/advertisement/tall_ad";
import { Outlet } from "react-router-dom";

const panes = [
    { menuItem: 'Badminton', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
        <ScheduleGallary sport="badminton"/>
    </Tab.Pane> },
    { menuItem: 'Baseball', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
        <ScheduleGallary sport="baseball"/>
    </Tab.Pane> },
    { menuItem: 'Basketball', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
        <ScheduleGallary sport="basketball"/>
    </Tab.Pane> },
    { menuItem: 'Soccer', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
    </Tab.Pane> },
    { menuItem: 'Swimming', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
    </Tab.Pane> },
    { menuItem: 'TableTennis', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
    </Tab.Pane> },
    { menuItem: 'Tennis', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
    </Tab.Pane> },
    { menuItem: 'Volleyball', render: () => <Tab.Pane>
        <ButtonExampleGroupBasic/>
    </Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

const ButtonExampleGroupBasic = () => (
    <div>
      <Button.Group basic>
        <Button>Boys</Button>
        <Button>Girls</Button>
      </Button.Group>
    </div>
)

// MAIN FUNCTION
export default function Home() {
  return(
  <div class="ui grid">
    <TallAd/>
    <div class="three nine wide column">
    <ScheduleGallary></ScheduleGallary>
      
    </div>
    <TallAd/>

  </div>
  );
}
