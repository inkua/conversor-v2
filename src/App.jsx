import { Route, Switch } from "wouter";

import Layout from "./layout/Layout/Layout";
import TimeConvecter from "./pages/TimeConvecter/TimeConvecter";
import InvitationGenerator from "./pages/InvitationGenerator/InvitationGenerator";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={TimeConvecter} />
          <Route path="/invitacion" component={InvitationGenerator} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
