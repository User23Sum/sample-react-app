interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface IssLocation {
  latitude: string;
  longitude: string;
}

interface ApodData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
}

interface AstroInfo {
  message: string;
  people: { name: string; craft: string }[];
  number: number;
}

interface SolarInfo {
  englishName: string;
  isPlanet: boolean;
  gravity: number;
  meanRadius: number;
  avgTemp: number;
}