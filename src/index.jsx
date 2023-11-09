import React from "react";
import ContactApp from "./components/contactApp";
import { createRoot } from "react-dom/client";
import "../public/style.css";

const root = createRoot(document.getElementById("root"));

root.render(<ContactApp />);
