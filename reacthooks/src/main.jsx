import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import PropsDemo from "./components/PropsDemo.jsx";
import UseStateDemo1 from "./components/UseStateDemo1.jsx";
import UseStateBooleanDemo from "./components/UseStateBooleanDemo.jsx";

import VoteEligibility from "./components/VoteEligibility.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <PropsDemo name="Giri" age={30} /> */}
    {/* <UseStateDemo1 /> */}
    {/* <UseStateBooleanDemo /> */}
    {/* <VoteEligibility age={27} /> */}
  </StrictMode>
);
