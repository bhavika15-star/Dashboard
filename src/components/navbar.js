import React from "react";
import "./navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbarhynrid">
        <SettingsIcon /> 
        <div  className="navbarhynridtext"> HYBRID</div>
      </div>


      <div className="navbaricon">
        
          <EmailIcon />
     
          <CallToActionIcon />
     
          <NotificationsIcon />
  
          <PersonIcon />
        
      </div>

    </div>
  );
}

export default Navbar;
