import "./App.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";
import SeismicCard from "./components/SeismicCard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-auto justify-center items-center h-full w-full">
        <div className="flex flex-row space-x-4">
          <WeatherCard />
          <SeismicCard />
        </div>
      </div>
    </div>
  );
};

export default App;
