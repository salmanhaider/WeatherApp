import "./App.css";
import React, { useEffect } from "react";
import DrawerAppBar from "./Components/AppHeader";
import SearchBar from "./Components/SearchBar";
import WeatherData from "./Components/WeatherData";
import { connect } from "react-redux";
import { getWeatherData } from "./Actions/WeatherDataAction";

const App: React.FC = () => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div className="App">
        <DrawerAppBar />
        <SearchBar />
        <WeatherData />
      </div>
    </>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getWeatherData: () => dispatch(getWeatherData()),
  };
}
export default connect(null, mapDispatchToProps)(App);
