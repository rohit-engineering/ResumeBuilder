// src/routes/AppRoutes.jsx

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Home from "../pages/Home";
import CareerStage from "../pages/CareerStage";
import Templates from "../pages/Templates";
import Builder from "../pages/Builder";
import ATSChecker from "../pages/ATSChecker";
import Editor from "../pages/Editor";
import ThumbnailGenerator from "../pages/ThumbnailGenerator";

import MainLayout from "../layouts/MainLayout";

const PageTransition = ({
  children,
}) => (
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    exit={{
      opacity: 0,
    }}
    transition={{
      duration: 0.2,
    }}
  >
    {children}
  </motion.div>
);

function AppRoutes() {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/career-stage"
            element={
              <PageTransition>
                <CareerStage />
              </PageTransition>
            }
          />

          <Route
            path="/templates"
            element={
              <PageTransition>
                <Templates />
              </PageTransition>
            }
          />

          <Route
            path="/builder"
            element={
              <PageTransition>
                <Builder />
              </PageTransition>
            }
          />

          <Route
            path="/editor"
            element={
              <PageTransition>
                <Editor />
              </PageTransition>
            }
          />

          <Route
            path="/ats-checker"
            element={
              <PageTransition>
                <ATSChecker />
              </PageTransition>
            }
          />

          <Route
            path="/thumbnail"
            element={
              <ThumbnailGenerator />
            }
          />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

export default AppRoutes;