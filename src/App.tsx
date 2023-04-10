import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { publicRoutes,privateRoutes } from "./routes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; 

import { useState } from 'react';
import MyContext from "./components/Context/MyContextProps";

const App: React.FC = () => {
  const [token, setToken] = useState('');
  return (
    <MyContext.Provider value={{ token, setToken }}>
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
    </MyContext.Provider>
  );
};

export default App;
