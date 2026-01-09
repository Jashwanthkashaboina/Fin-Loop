import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from "./components/GeneralContext";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <Toaster position="top-center" />
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </GeneralContextProvider>
);
