import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ContactPage from "./pages/contact";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<ProjectsPage />} path="/projects" />
    </Routes>
  );
}

export default App;
