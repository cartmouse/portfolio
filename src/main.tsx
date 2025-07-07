import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { LearnMore } from "@Components";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  experimental,
  interactive,
  practical,
  ProjectCategory,
} from "@Projects";

const createRoutes = (category: ProjectCategory) =>
  category.projects.map((proj, i) => (
    <Route
      key={`${proj.title}-${i}`}
      path={`${proj.id}`}
      element={<LearnMore info={proj} />}
    />
  ));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {createRoutes(interactive)}
      {createRoutes(experimental)}
      {createRoutes(practical)}
    </Routes>
  </Router>
);
