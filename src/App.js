import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { Header } from "./Components/Header/Header.jsx";
import { Route, Switch } from "react-router-dom";
import HomeView from "./Views/HomeView.jsx";
import MoviePage from "./Views/MovieView.jsx";
import NotFoundView from "./Views/NotfoundView.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviePage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
