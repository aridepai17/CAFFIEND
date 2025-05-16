import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fanta.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
