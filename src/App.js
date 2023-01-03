import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import {
  BlepharoplastieSup,
  BlepharoplastieSupEla,
  BlepharoplastieSupPto,
} from "./pages/Blepharoplastie";
import { LiftingTemp, LiftingFronMala } from "./pages/Lifting";
import { ChirurgieCombine, ChirurgiePoche } from "./pages/Chirurgie";
import { ComblementJL, ComblementVisage } from "./pages/Comblement";
import Palpebral from "./pages/Palpebral";
import Rajeunissement from "./pages/Rajeunissement";
import Pommettes from "./pages/Pommettes";
import Acces from "./pages/Acces";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/accueil" exact component={Accueil} />
        <Route
          path="/blepharoplastie/superieure"
          exact
          component={BlepharoplastieSup}
        />
        <Route
          path="/blepharoplastie/superieureelargie"
          exact
          component={BlepharoplastieSupEla}
        />
        <Route
          path="/blepharoplastie/superieureptosis"
          exact
          component={BlepharoplastieSupPto}
        />
        <Route path="/lifting/temporal" exact component={LiftingTemp} />
        <Route
          path="/lifting/frontalmalaire"
          exact
          component={LiftingFronMala}
        />
        <Route path="/chirurgie/combine" exact component={ChirurgieCombine} />
        <Route path="/chirurgie/poche" exact component={ChirurgiePoche} />
        <Route path="/comblement/joueslevres" exact component={ComblementJL} />
        <Route path="/comblement/visage" exact component={ComblementVisage} />
        <Route path="/palpebral" exact component={Palpebral} />
        <Route path="/rajeunissement" exact component={Rajeunissement} />
        <Route path="/pommettes" exact component={Pommettes} />
        <Route path="/acces" exact component={Acces} />
      </Switch>
    </Router>
  );
}

export default App;
