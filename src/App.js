import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Contacts from "./components/Contacts";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/panel" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;