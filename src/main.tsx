import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import PageWrapper from "./components/PageWrapper.tsx";
import "./index.css";
import About from "./routes/About.tsx";
import Demo from "./routes/Demo.tsx";
import ErrorPage from "./routes/Error.tsx";
import Home from "./routes/Home.tsx";
import Impress from "./routes/Impress.tsx";
import Login from "./routes/Login.tsx";
import Privacy from "./routes/Privacy.tsx";
import Schools from "./routes/Schools.tsx";
import Verify from "./routes/Verify.tsx";

const root = document.getElementById("root");

if (!root) throw new Error("No root element found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="impressum" element={<Impress />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="unternehmen" element={<About />} />
          <Route path="demo" element={<Demo />} />
          <Route path="login" element={<Login />} />
          <Route path="schulen" element={<Schools />} />
          <Route path="verify/:token" element={<Verify />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
