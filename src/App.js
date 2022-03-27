import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
