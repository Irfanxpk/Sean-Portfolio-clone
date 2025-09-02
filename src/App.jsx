import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import AboutPage from "@/pages/About";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";

const ProjectDetail = lazy(() => import("@/pages/projects/ProjectDetails"));

function App() {
  return (
    <Router>
      {/* <SideNav className="h-screen "/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* <BottomNav /> */}
    </Router>
  );
}

export default App;
