import axios, { AxiosError } from "axios";

const API_URL = "https://sturdy-doodle-pvq69776745f6gxx-3000.app.github.dev/api";

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  return new Promise<WeatherData>((resolve, reject) => {
    axios
      .get(`${API_URL}/weather/${city}`)
      .then((res) => {
        resolve({
          city: city,
          temperature: res.data.temperature,
          humidity: res.data.humidity,
          wind: res.data.wind,
          rain: res.data.rain,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("City not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};

export const getSeismicData = async (city: string): Promise<SeismicData> => {
  return new Promise<SeismicData>((resolve, reject) => {
    axios
      .get(`${API_URL}/seismic/${city}`)
      .then((res) => {
        resolve({
          city: city,
          magnitute: res.data.magnitute,
          latitude: res.data.latitude,
          longitude: res.data.longitude,
          id: res.data.id,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("City not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};

export const getIssLocation = async (): Promise<IssLocation> => {
  console.log("Fetching ISS location...");
  return new Promise<IssLocation>((resolve, reject) => {
    axios
      .get(`${API_URL}/iss`)
      .then((res) => {
        console.log("Response from ISS API:", res.data); // Log response data
        const { iss_position } = res.data;
        if (iss_position) {
          resolve({
            latitude: iss_position.latitude,
            longitude: iss_position.longitude,
          });
        } else {
          reject("ISS position data not found in the response");
        }
      })
      .catch((error) => {
        console.error("Error fetching ISS location:", error); // Log fetch error
        reject("Error fetching ISS location");
      });
  });
};





