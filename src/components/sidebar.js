import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import Dashboard from "./dashboard";
import UIelements from "./UIelements";
import ComputerIcon from '@mui/icons-material/Computer';
import charts from "./charts";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import tabsandpanels from "./tabsandpanels";
import TableChartIcon from '@mui/icons-material/TableChart';
import responsivetables from "./responsivetables";
import TableViewIcon from '@mui/icons-material/TableView';
import forms from "./forms";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import multileveldropdown from "./multileveldropdown";
import EjectIcon from '@mui/icons-material/Eject';
import emptypage from "./emptypage";
import FileCopyIcon from '@mui/icons-material/FileCopy';

function sidebar() {
  return (
    <div className="g sidebar">
      <div className="side">
        <HomeIcon />
        <Link to="/" href={Dashboard}>
          <div>Dashboard</div>
        </Link>
      </div>

      <div className="side">
        <ComputerIcon />
        <Link to="/UIelements" href={UIelements}>
          <div>UI Elements</div>
        </Link>
      </div>

      <div className="side">
        <InsertChartOutlinedIcon />
        <Link to="/charts" href={charts}>
          <div>Charts</div>
        </Link>
      </div>

      <div className="side">
        <TableChartIcon />
        <Link to="/tabsandpanels" href={tabsandpanels}>
          <div>Tabs & Panels</div>
        </Link>
      </div>

      <div className="side">
        <TableViewIcon />
        <Link to="/responsivetables" href={responsivetables}>
          <div>Responsive Tables</div>
        </Link>
      </div>

      <div className="side">
        <DynamicFormIcon />
        <Link to="/forms" href={forms}>
          <div>Forms</div>
        </Link>
      </div>

      <div className="side">
        <EjectIcon />
        <Link to="/multileveldropdown" href={multileveldropdown}>
          <div>Multi-Level Dropdown</div>
        </Link>
      </div>

      <div className="side">
        <FileCopyIcon />
        <Link to="/emptypage" href={emptypage}>
          <div>Empty Page</div>
        </Link>
      </div>
    </div>
  );
}

export default sidebar;
