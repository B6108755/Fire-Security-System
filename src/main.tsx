import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavSide from "./components/NavSide";
import "./index.css";
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavSide></NavSide>
    </BrowserRouter>
  </React.StrictMode>
);
