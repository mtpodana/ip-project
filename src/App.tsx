import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { publicRoutes,privateRoutes } from "./routes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = MainLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = MainLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute>
                    <Layout>
                    <Page />
                  </Layout>
                  </ProtectedRoute>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
