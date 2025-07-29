import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { LearnMore, MoreProjects } from "@Components";

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
      path={`/projects/${proj.id}`}
      element={<LearnMore info={proj} />}
    />
  ));

const projects = [interactive, experimental, practical];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {projects.map((project) => createRoutes(project))}
      {projects.map((project) => (
        <Route
          key={`${project.anchor}`}
          path={`/projects/${project.anchor}`}
          element={<MoreProjects category={project} />}
        />
      ))}
    </Routes>
  </Router>
);
