import React from "react";
import { Button } from "semantic-ui-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate()


  const handleLogout = () => {
    signOut(auth).then(()=>{
        
        console.log("Signed out successfully")
        alert("Signed Out!")
        navigate("/login")
        
    }).catch((error)=>{
        console.log("error", error)

    })
  };
  return (
    <Button
      className="navbarfont"
      onClick={handleLogout}
      inverted="fixed"
      primary="fixed"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
