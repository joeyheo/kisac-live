// KISAC.LIVE V2 CLIENT

import React, { useEffect, useState } from "react";
import "../../../App.css";
import {
  Dropdown,
  Menu,
  Container,
  Image,
  Button,
  Label,
  Icon,
  LabelDetail,
} from "semantic-ui-react";

import { Link } from "react-router-dom";
// IMAGE IMPORT
import Icon_logo from "../../../resources/logo/icon_logo_white.png";
import { auth,db } from "../../../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import LogoutButton from "../../login/LogoutButton";
import {
  getDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  doc,
  where,
  setDoc,
} from "firebase/firestore";

import { BrowserView, MobileView } from "react-device-detect";

// PADDING FOR REMOVING OVERLAY
const tempStyle = {
  // position:"absolute",
  top: "0",
  width: "100%",
  paddingTop: "66.5px",
};

const tempStyleforMob = {
  top: "0",
  width: "100%",
  paddingTop: "80px",
}

let isuserAdmin;

function getAdminText(isuserAdmin){

    if(isuserAdmin == true){
      return "Admin";
    } else {
      return "User";
    }
  
  
}
// MAIN FUNCTION
export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log("Status: logged in");
        console.log(user.uid);
        
        getDoc(doc(db, "users", user.uid)).then(docSnap => {
          if (docSnap.exists()) {
            const datarecieved = docSnap.data();

            console.log(datarecieved);
            console.log("Document data:", JSON.stringify(datarecieved, null, 4));

           // const slug = array1.map((datarecieved) => { return Object.values(datarecieved); });
           // this prints out if the user is admin or not: 
           console.log("isUserAdmin: "+ datarecieved.isAdmin); 
           window.localStorage.setItem('ISADMIN', getAdminText(datarecieved.isAdmin));
          } else {
            console.log("No such document!");
          }
        })
        
      } else {
        setIsLoggedIn(false);
        console.log("Status: logged out");
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);
  
  return (
<>
    <BrowserView>
<div style={tempStyle}>
      <Menu inverted stackable borderless fixed="top" >
        <Container>
          <Menu.Item
            className="navbarfont"
            style={{ fontSize: "1.25rem" }}
            as={Link}
            to="/home"
            header
          >
            <Image
              size="mini"
              src={Icon_logo}
              style={{ marginRight: "1.5em" }}
            />
            KISAC.LIVE
          </Menu.Item>

          <Dropdown className="navbarfont" item simple text="Competition">
            <Dropdown.Menu className="navbarfont">
              <Dropdown.Header className="navbarfont">KISAC</Dropdown.Header>
              <Dropdown.Item className="navbarfont" as={Link} to="/kisac">
                Tennis
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header className="navbarfont">JIT</Dropdown.Header>
              <Dropdown.Item className="navbarfont" as={Link} to="/jit">
                Volleyball
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="navbarfont" item simple text="Sports">
            <Dropdown.Menu className="navbarfont">
              <Dropdown.Header className="navbarfont">Season 1</Dropdown.Header>
              <Dropdown.Item className="navbarfont" as={Link} to="/tabletennis">
                Table Tennis
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/tennis">
                Tennis
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/volleyball">
                Volleyball
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/swimming">
                Swimming
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Header className="navbarfont">Season 2</Dropdown.Header>
              <Dropdown.Item className="navbarfont" as={Link} to="/basketball">
                Basketball
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/tabletennis">
                Table Tennis
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/swimming">
                Swimming
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Header className="navbarfont">Season 3</Dropdown.Header>
              <Dropdown.Item className="navbarfont" as={Link} to="/soccer">
                Soccer
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/badminton">
                Badminton
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/tabletennis">
                Table Tennis
              </Dropdown.Item>
              <Dropdown.Item className="navbarfont" as={Link} to="/tennis">
                Tennis
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item className="navbarfont" as={Link} to="/players">
            Players
          </Menu.Item>
          <Menu.Item className="navbarfont" as={Link} to="/schedules">
            Schedules
          </Menu.Item>
          <Dropdown className="navbarfont" item simple text="Ranking">
            <Dropdown.Menu>
              <Dropdown.Item className="navbarfont" as={Link} to="/teamranking">
                Team Ranking
              </Dropdown.Item>
              <Dropdown.Item
                className="navbarfont"
                as={Link}
                to="/playerranking"
              >
                Player Ranking
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item position="right">
            {/*Link to user profile, need to make a new route which can take user's uids and dispay them*/}

            {isLoggedIn ? (
              <div>
                <a>
                  <Label
                    as="a"
                    color="blue"
                    content={auth.currentUser.displayName}
                    image
                  >
                    <img src={auth.currentUser.photoURL} />
                    {auth.currentUser.displayName}
                    {/* <Label.Detail>{window.localStorage.getItem('ISADMIN')}</Label.Detail> */}
                  </Label>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <LogoutButton />
              </div>
            ) : (
              <Button
                className="navbarfont"
                as={Link}
                to="/login"
                inverted="fixed"
                primary="fixed"
              >
                Login / Sign up
              </Button>
            )}
          </Menu.Item>
        </Container>
      </Menu>
    </div>
    </BrowserView>

    <MobileView>
      <div style={tempStyleforMob}>
        <Menu inverted stackable borderless fixed="top">
          {/* <Container> */}
            <Menu.Item
              className="navbarfont"
              style={{ fontSize: "1.05rem" }}
              as={Link}
              to="/home"
              header
            >
              <Image
                size="mini"
                src={Icon_logo}
                style={{ marginRight: "1.5em" }}
              />
              KISAC.LIVE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Menu.Item>
        
            <Dropdown text="Menu">
              <Dropdown.Menu>
                <Dropdown pointing="left" text="Competition" className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Header className="navbarfont">KISAC</Dropdown.Header>
                    <Dropdown.Item className="navbarfont" as={Link} to="/kisac">
                      Tennis
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header className="navbarfont">JIT</Dropdown.Header>
                    <Dropdown.Item className="navbarfont" as={Link} to="/jit">
                      Volleyball
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown pointing="left" text="Sports" className="link item">
                  <Dropdown.Menu className="navbarfont">
                    <Dropdown.Header className="navbarfont">Season 1</Dropdown.Header>
                    <Dropdown.Item className="navbarfont" as={Link} to="/tabletennis">
                      Table Tennis
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/tennis">
                      Tennis
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/volleyball">
                      Volleyball
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/swimming">
                      Swimming
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Header className="navbarfont">Season 2</Dropdown.Header>
                    <Dropdown.Item className="navbarfont" as={Link} to="/basketball">
                      Basketball
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/tabletennis">
                      Table Tennis
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/swimming">
                      Swimming
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Header className="navbarfont">Season 3</Dropdown.Header>
                    <Dropdown.Item className="navbarfont" as={Link} to="/soccer">
                      Soccer
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/badminton">
                      Badminton
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/tabletennis">
                      Table Tennis
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/tennis">
                      Tennis
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item className="link item" as={Link} to="/players">
                  Players
                </Menu.Item>

                <Menu.Item className="link item" as={Link} to="/schedules">
                  Schedules
                </Menu.Item>

                <Dropdown pointing="left" text="Ranking" className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item className="navbarfont" as={Link} to="/teamranking">
                      Team Ranking
                    </Dropdown.Item>
                    <Dropdown.Item className="navbarfont" as={Link} to="/playerranking">
                      Player Ranking
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item position="right">
                  {/*Link to user profile, need to make a new route which can take user's uids and dispay them*/}

                  {isLoggedIn ? (
                    <div>
                      <a>
                        <Label
                          as="a"
                          color="blue"
                          content={auth.currentUser.displayName}
                          image
                        >
                          <img src={auth.currentUser.photoURL} />
                          {auth.currentUser.displayName}
                          {/* <Label.Detail>{window.localStorage.getItem('ISADMIN')}</Label.Detail> */}
                        </Label>
                      </a>
                      &nbsp;&nbsp;
                      <LogoutButton />
                    </div>
                  ) : (
                    <Button
                      className="navbarfont"
                      as={Link}
                      to="/login"
                      inverted="fixed"
                      primary="fixed"
                    >
                      Login / Sign up
                    </Button>
                  )}
                </Menu.Item>
              </Dropdown.Menu>
            </Dropdown>
          {/* </Container> */}
        </Menu>
      </div>
    </MobileView>
</>
    
  );
}
