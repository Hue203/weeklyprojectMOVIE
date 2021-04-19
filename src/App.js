import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import Detailpage from "./pages/Detailpage";
import PublicNavbar from "./components/PublicNavbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Router>
        <PublicNavbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/movies" exact component={Moviepage} />
          <Route path="/movie/:id" exact component={Detailpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
