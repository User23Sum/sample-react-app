import "./App.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";
import SeismicCard from "./components/SeismicCard";
import IssCard from "./components/IssCard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-auto items-center h-full w-full bg-custom-image">
        <div className="flex flex-row space-x-4">
          <WeatherCard />
          <SeismicCard />
          <IssCard />
        </div>
      </div>
    </div>
  );
};

export default App;