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

export const getIssLocation = async (): Promise<IssLocation> => {
  console.log("Fetching ISS location...");
  return new Promise<IssLocation>((resolve, reject) => {
      axios
          .get(`${API_URL}/iss`)
          .then((res) => {
              console.log("Response from ISS API:", res.data);
              const { issData } = res.data; // Extract issData from the response
              if (issData && issData.iss_position) {
                  resolve({
                      latitude: issData.iss_position.latitude,
                      longitude: issData.iss_position.longitude,
                  });
              } else {
                  reject("ISS position data not found in the response");
              }
          })
          .catch((error) => {
              console.error("Error fetching ISS location:", error);
              reject("Error fetching ISS location");
          });
  });
};

export const getApodData = async (date: string): Promise<ApodData> => {
  console.log("Fetching APOD data...");
  return new Promise<ApodData>((resolve, reject) => {
    axios
      .get(`${API_URL}/apod?date=${date}`)
      .then((res) => {
        console.log("Response from APOD API:", res.data);
        resolve(res.data);
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
        reject("Error fetching APOD data");
      });
  });
};

export const getAstroInfo= async (): Promise<AstroInfo> => {
  console.log("Fetching Astro data...");
  return new Promise<AstroInfo>((resolve, reject) => {
    axios
      .get(`${API_URL}/astro`)
      .then((res) => {
        console.log("Response from astro API:", res.data);
        resolve(res.data);
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
        reject("Error fetching APOD data");
      });
  });
};

export const getSolarData = async (bodyName: string): Promise<SolarInfo> => {
  return new Promise<SolarInfo>((resolve, reject) => {
    axios
      .get(`${API_URL}/solar/${bodyName}`)
      .then((res) => {
        resolve({
          englishName: res.data.englishName,
          isPlanet: res.data.isPlanet,
          gravity: res.data.gravity,
          meanRadius: res.data.meanRadius,
          avgTemp: res.data.avgTemp,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Solar body not found");
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

