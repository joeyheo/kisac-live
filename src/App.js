// KISAC.LIVE V2 CLIENT

// IMPORT
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "semantic-ui-react";

//Component Import
import Navbar from "./components/etc/navbar/navbar";
import Home from "./components/home/home";
import Players from "./components/players/players";
import Badminton from "./components/sports/badminton";
import Baseball from "./components/sports/baseball";
import Basketball from "./components/sports/basketball";
import Soccer from "./components/sports/soccer";
import Swimming from "./components/sports/swimming";
import Tabletennis from "./components/sports/tabletennis";
import Tenis from "./components/sports/tennis";
import Volleyball from "./components/sports/volleyball";
import Watch from "./components/stream/watch";
import Score from "./components/etc/display/scoredisplay";
import Schedule from "./components/schedule/schedule";
import Admindashboard from "./components/admin/admin";

//table_schedule & gallary_schedule test page
import Table from "./components/schedule/table_schedule";
import Gallary from "./components/schedule/gallary_schedule";


import TVScoring from "./components/etc/display/tvdisplay";


//login system
import Login from "./components/login/login";
import UploaderTest from "./components/admin/UploaderTest";
import PlayerUpdater from "./components/admin/PlayerUpdater";
import CreateSchedule from "./components/schedule/CreateSchedule";
import ScheduleDetail from "./components/schedule/ScheduleDetail";


//Competition
import Jit from "./components/competition/jit";
import JitDetail from "./components/competition/jitdetail";
import JitRanking from "./components/competition/jitranking";
import Kisac from "./components/competition/kisac";
import KisacRanking from "./components/competition/kisacranking";
import CompetitionAdmin from './components/competition/CreateCompetition';

import Gamedisplay from './components/etc/display/gamedisplay';
import Scoring from "./components/etc/display/scoring";

// MAIN FUNCTION
export default function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="players" element={<Players />} />
          <Route path="badminton" element={<Badminton />} />
          <Route path="baseball" element={<Baseball />} />
          <Route path="basketball" element={<Basketball />} />
          <Route path="soccer" element={<Soccer />} />
          <Route path="swimming" element={<Swimming />} />
          <Route path="tabletennis" element={<Tabletennis />} />
          <Route path="tennis" element={<Tenis />} />
          <Route path="volleyball" element={<Volleyball />} />
          <Route path="watch" element={<Watch />} />
          <Route path="score" element={<Score />} />
          <Route path="schedules" element={<Schedule />}>
            
          </Route>
          <Route path="schedules/:scheduleId" element={<ScheduleDetail />} />
          <Route path="admin" element={<Admindashboard />} />
          <Route path="test" element={<UploaderTest />} />
          <Route path="updateplayers" element={<PlayerUpdater />} />
          <Route path="createschedule" element={<CreateSchedule />} />

          <Route path="table" element={<Table />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="login" element={<Login />} />
          <Route path="tvscore" element={<TVScoring/>}/>

          <Route path="jit" element={<Jit/>}/>
          <Route path="jit/:scheduleId" element={<JitDetail />} />
          <Route path="jit/scoring/:scheduleId" element={<Scoring />} />
          <Route path="kisac" element={<Kisac/>}/>

          <Route path="kisacranking" element={<KisacRanking/>}/>
          <Route path="jitranking" element={<JitRanking/>}/>

          <Route path="compadmin" element={<CompetitionAdmin/>}/>
          <Route path="gamedisplay" element={<Gamedisplay/>}/>
          

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
