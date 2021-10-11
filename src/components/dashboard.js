import React from "react";
import "./dashboard.css";
import areachart from "../images/area-chart-spline.svg"
import linechart from "../images/512px-SVG-UC-Area.svg.png"

function Dashboard() {
  return (
    <div className="dash">
      <div className="dashboard">
        <p style={{ fontSize: "2rem" }}>Dashboard</p>
        {/*<p>Summary of your app</p>*/}
      </div>
      <div className="dashboard home">
        <p>Home</p>
        <p>/</p>
        <p>Library</p>
        <p>/</p>
        <p>Data</p>
      </div>
      <div className="div">
        <div className="a">
          <p className="number">8,457</p>
          <p>Daily Visits</p>
        
        </div>
        <div className="a">
          <p className="number">52,160</p>
          <p>Sales</p>
        </div>
        <div className="a">
          <p className="number">15,823</p>  
          <p>Comments</p>
        </div>
        <div className="a">
          <p className="number">36,752</p>
          <p>No. of Visits</p>
        </div>
      </div>
      <br />
      <br />
      <div className="">
        <img src={areachart}></img>
        <img src={linechart}></img>
      </div>
    </div>
  );
}

export default Dashboard;
