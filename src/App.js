import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import "./App.css";

function IframeLoader() {
  let { slug } = useParams();
  return (
    <div
      style={{
        position: "fixed",
        overflowY: "hidden",
        overflowX: "hidden",
        width: "100%",
        height: "100%"
      }}>
      <iframe
        style={{ width: "100%", height: "100%" }}
        src={`https://www.youtube.com/embed/${slug}?&autoplay=0&playsinline=1`}
        playsInline='1'
        frameBorder='0'
        scrolling='no'
        allow='playsinline; accelerometer; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div>try adding a youtube id as a route param</div>
        </Route>
        <Route path='/:slug'>
          <IframeLoader></IframeLoader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
