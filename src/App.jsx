import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Graph } from "./screens";
import { BaseLayout } from "./layout";
import { routeConstants } from "./constants/routeConstants";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routeConstants.ROOT} element={<BaseLayout />}>
            <Route index element={<Graph />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
