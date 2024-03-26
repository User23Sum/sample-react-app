import React, { useState } from 'react';
import { getApodData } from "../api/actions"

import "../css/ApodCard.css";

const ApodCard: React.FC = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchApod = (date: string) => {
    setLoading(true);
    setError("");

    getApodData(date)
      .then((data) => {
        setApodData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const date = formData.get("date") as string;
    handleFetchApod(date);
  };

  return (
    <div className="apod-card max-w-[700px]">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Astronomy Picture of the Day</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date" className="block mb-2">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          />
          <div className="mb-1"></div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Fetching..." : "Request Picture"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {apodData && (
          <div className="apod-card-content">
            <img src={apodData.hdurl} alt={apodData.title} className="w-full h-auto rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{apodData.title}</h3>
            <p className="text-gray-600 mt-1">{apodData.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApodCard;

