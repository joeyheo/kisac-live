//KISAC.LIVE V2 CLIENT
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
} from "semantic-ui-react";

//Firebase Imports
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  doc,
  where,
  setDoc,
} from "firebase/firestore";

import Icon_logo from "../../resources/logo/icon_logo_black.png";
import { FirebaseError } from "firebase/app";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const bruhid = "";
const provider = new GoogleAuthProvider();

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("the User is Logged in");
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        //this token can be used to access the Google API
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        //user info
        const user = result.user;

        //handle Database
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", user.uid));
        const docs = await getDocs(q);

        //Checks if the user is already added to the db
        if (docs.docs.length === 0) {
          console.log("this guy isnot in the user database!");
          const data = {
            id: user.uid,
            name: user.displayName,
            authProvider: "Google",
            email: user.email,
            createdAt: serverTimestamp(),
            isAdmin: false,
          };
          await setDoc(doc(db, "users", user.uid), data)
            .then(() => {
              console.log("this user has been added to the data base");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
        console.log(usersRef);
        //welcome message
        alert(`Welcome, ${user.displayName}!`);
        //redirects the user to home after login
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
    <BrowserView>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={Icon_logo} /> Login / Sign Up to your account
        </Header>

        <Button positive color="black" fluid size="large" onClick={handleLogin}>
          Login / Signup with Google
        </Button>
        <Message attached="bottom" warning>
          <Icon name="help" />
          Hey! Did you know that we use Google for handling all of logins and
          signups? No need to make extra accounts, just login with your google
          account.
        </Message>
        <h6>
          By creating an account, you are agreeing to the{" "}
          <a href="/privacy.html">
            Terms and Conditions & Privacy Policies of KISAC.Live
          </a>
        </h6>
      </Grid.Column>
    </Grid>
</BrowserView>

<MobileView>
<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={Icon_logo} /> Login / Sign Up to your account
        </Header>

        <button positive color="black" fluid size="large" onClick={handleLogin}>
          Login / Signup with Google
        </button>
        <Message attached="bottom" warning>
          <Icon name="help" />
          Hey! Did you know that we use Google for handling all of logins and
          signups? No need to make extra accounts, just login with your google
          account.
        </Message>
        <h6>
          By creating an account, you are agreeing to the{" "}
          <a href="/privacy.html">
            Terms and Conditions & Privacy Policies of KISAC.Live
          </a>
        </h6>
      </Grid.Column>
    </Grid>
</MobileView>
</>
    
  );
};

export default LoginForm;
