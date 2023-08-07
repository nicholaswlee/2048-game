import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage.tsx/MainPage";
import { GlobalContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <MainPage />
    </GlobalContextProvider>
  );
}

export default App;
