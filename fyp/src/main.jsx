// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NAVBAR from "./components/layouts/NAVBAR";
import FOOTER from "./components/layouts/FOOTER";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NAVBAR />
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
      <FOOTER />
    </BrowserRouter>
  </StrictMode>
);