
import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutSection from "./components/AboutSection";
import ContactFooter from "./components/ContactFooter";
import Loader from "./components/Loader";
import PortfolioHeroProjects from "./components/PortfolioHeroProjects";
import EducationExperience from "./components/EducationExperience";

import ProjectSection from "./pages/ProjectSection";

function HomePage({ isReady }) {
  return (
    <>
      <PortfolioHeroProjects isReady={isReady} />
      <AboutSection />
      <EducationExperience />
      <ContactFooter />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = useCallback(
    () => setIsLoading(false),
    []
  );

  return (
    <BrowserRouter>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      <div className={`app-content${isLoading ? " app-content--loading" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={<HomePage isReady={!isLoading} />}
          />

          <Route
            path="/projects"
            element={<ProjectSection />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
