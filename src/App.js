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
        <Route path="/eyesthetic/accueil" exact component={Accueil} />
        <Route
          path="/eyesthetic/blepharoplastie/superieure"
          exact
          component={BlepharoplastieSup}
        />
        <Route
          path="/eyesthetic/blepharoplastie/superieureelargie"
          exact
          component={BlepharoplastieSupEla}
        />
        <Route
          path="/eyesthetic/blepharoplastie/superieureptosis"
          exact
          component={BlepharoplastieSupPto}
        />
        <Route
          path="/eyesthetic/lifting/temporal"
          exact
          component={LiftingTemp}
        />
        <Route
          path="/eyesthetic/lifting/frontalmalaire"
          exact
          component={LiftingFronMala}
        />
        <Route
          path="/eyesthetic/chirurgie/combine"
          exact
          component={ChirurgieCombine}
        />
        <Route
          path="/eyesthetic/chirurgie/poche"
          exact
          component={ChirurgiePoche}
        />
        <Route
          path="/eyesthetic/comblement/joueslevres"
          exact
          component={ComblementJL}
        />
        <Route
          path="/eyesthetic/comblement/visage"
          exact
          component={ComblementVisage}
        />
        <Route path="/eyesthetic/palpebral" exact component={Palpebral} />
        <Route
          path="/eyesthetic/rajeunissement"
          exact
          component={Rajeunissement}
        />
        <Route path="/eyesthetic/pommettes" exact component={Pommettes} />
        <Route path="/eyesthetic/acces" exact component={Acces} />
      </Switch>
    </Router>
  );
}

export default App;
