import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import PublicNavbar from "./components/PublicNavbar";

function App() {
  return (
    <div>
      <Router>
        <PublicNavbar />

        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/movie/:id" exact component={Detailpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
