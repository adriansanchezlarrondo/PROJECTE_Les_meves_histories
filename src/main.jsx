import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <NextUIProvider>
        <main className="purple-dark text-foreground">
          <App />
        </main>
      </NextUIProvider>
    </GlobalProvider>
  </React.StrictMode>,
);
