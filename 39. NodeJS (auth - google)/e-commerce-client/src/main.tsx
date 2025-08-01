import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n/config.ts";

createRoot(document.getElementById("root")!).render(<App />);
