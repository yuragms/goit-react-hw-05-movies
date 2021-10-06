import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { Header } from "./Components/Header/Header.jsx";
// import HomeView from "./Views/HomeView.jsx";
// import MoviePage from "./Views/MovieView.jsx";
// import NotFoundView from "./Views/NotfoundView.jsx";
// import MovieDetailsView from "./Views/MovieDetailsView.jsx";
import "./App.css";

const HomeView = lazy(() =>
  import("./Views/HomeView.jsx" /* webpackChunkName: 'HomeView' */)
);
const MoviePage = lazy(() =>
  import("./Views/MovieView.jsx" /* webpackChunkName: 'MoviePage' */)
);
const NotFoundView = lazy(() =>
  import("./Views/NotfoundView.jsx" /* webpackChunkName: 'NotfoundView' */)
);
const MovieDetailsView = lazy(
  () =>
    import(
      "./Views/MovieDetailsView.jsx"
    ) /* webpackChunkName: 'MovieDetailsView' */
);

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
