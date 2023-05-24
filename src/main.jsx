import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./router/index.js";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*al siguiente router provider le paso como prop mi archivo creado de rutas index.jsx*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);
