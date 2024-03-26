import "./App.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";
import SeismicCard from "./components/SeismicCard";
import IssCard from "./components/IssCard";
import PicBar from "./components/PicBar";
import ApodCard from "./components/ApodCard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <PicBar />
      <div className="flex flex-1 overflow-auto justify-evenly items-center h-full w-full bg-custom-image">
        <div className="flex flex-row space-x-4">
          <div className="w-64"> 
            <WeatherCard />
          </div>
          <div className="w-64"> 
            <SeismicCard />
          </div>
          <div className="w-64"> 
            <IssCard />
          </div>
          <div> 
            <ApodCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;