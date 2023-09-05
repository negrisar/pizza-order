import React from "react";

import Home from "./pages/Homepage";
import SiparisVer from "./pages/SiparisVer";
import { Switch, Route} from "react-router-dom";
import SiparisOnay from "./pages/SiparisOnay";


const App = () => {

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pizza" component={SiparisVer}></Route>
        <Route exact path="/onay" component={SiparisOnay}></Route>
      </Switch>
    </div>
     
  );
};

export default App;
