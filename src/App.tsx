import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DrawerAppBar from "./Components/AppHeader";
import SearchBar from "./Components/SearchBar";
import WeatherData from "./Components/WeatherData";

function App() {
  return (
    <>
      <div className="App">
        <DrawerAppBar />
        <SearchBar />
        <WeatherData />
      </div>
    </>
  );
}

export default App;
