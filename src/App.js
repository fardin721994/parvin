import { useState } from "react";
import "./App.css";
import "./fonts/Vazirmatn-Regular.ttf";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Test from "./Test";
import Results from "./Results";
import Waiting from "./Waiting";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import TestPage from "./TestPage";
function App() {
  return (
    <div className="App" dir="rtl">
      {/* <Results /> */}
      {/* <Waiting /> */}
      {/* <TestPage /> */}
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/testpage" exact>
            <TestPage />
          </Route>
          <Route path="/test/:type" exact>
            <Test />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      {/* <Route path="/courses/view/:courseId" exact>
            <CourseView />
          </Route> */}
    </div>
  );
}

export default App;
