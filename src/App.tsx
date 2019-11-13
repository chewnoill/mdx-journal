import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "components/page";
import { Flex } from "ui/components";

const App: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <Router>
        <Switch>
          <Route path="/" render={() => <Page page="index" />} exact />
          <Route
            path="/:pageid"
            render={({ match }) => <Page page={match.params.pageid} />}
            exact
          />
        </Switch>
      </Router>
    </Flex>
  );
};

export default App;
