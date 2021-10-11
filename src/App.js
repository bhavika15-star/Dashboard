import "./App.css";
import Sidebar from "./components/sidebar.js";
import Navbar from "./components/navbar.js";
import Dashboard from "./components/dashboard.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UIElements from "./components/UIelements.js";
import charts from "./components/charts";
import tabsandpanels from "./components/tabsandpanels";
import responsivetables from "./components/responsivetables";
import forms from "./components/forms";
import multileveldropdown from "./components/multileveldropdown";
import emptypage from "./components/emptypage";

function App() {
  return (
    <Router>
    <div className="App">
      <Router>
     {<Navbar />
    }
        <div className="conatenty">
          <Sidebar />
             <Switch>
             
                  <Route path="/" exact component={Dashboard}></Route>
                  <Route path="/dashboard" exact component={Dashboard}></Route>
                  <Route path="/UIelements" exact component={UIElements}></Route>
                  <Route path="/charts" exact component={charts}></Route>
                  <Route path="/tabsandpanels" exact component={tabsandpanels}></Route>
                  <Route path="/responsivetables" exact component={responsivetables}></Route>
                  <Route path="/forms" exact component={forms}></Route>
                  <Route path="/multileveldropdown" exact component={multileveldropdown}></Route>
                  <Route path="/emptypage" exact component={emptypage}></Route>
      
              </Switch>
        </div>
      
      </Router>
    </div>
     </Router>
  );
}

export default App;
