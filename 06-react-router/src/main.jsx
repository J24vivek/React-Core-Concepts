import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TheamContext from "./Context/TheamContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TheamContext>
      <App />
    </TheamContext>
  </BrowserRouter>,
);
