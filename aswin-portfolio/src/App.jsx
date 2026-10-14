import { useCallback, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactFooter from "./components/ContactFooter";
import Loader from "./components/Loader";
import PortfolioHeroProjects from "./components/PortfolioHeroProjects";
import ScrollIndicator from "./components/ScrollIndicator";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div className={`app-content${isLoading ? " app-content--loading" : ""}`}>
        <PortfolioHeroProjects isReady={!isLoading} />
        <AboutSection />
        {/* <ScrollIndicator /> */}
        <ContactFooter />
      </div>
    </>
  );
}
