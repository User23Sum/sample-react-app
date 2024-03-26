interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface SeismicData{
  city: string;
  magnitute: number;
  latitude: number;
  longitude: number,
  id: string,
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
