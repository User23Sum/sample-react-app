import React, { useState, useEffect } from "react";
import { getAstroInfo } from "../api/actions";

const AstroCard: React.FC = () => {
  const [astroInfo, setAstroInfo] = useState<AstroInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetchAstroInfo();
  }, []); // Fetch astro info when component mounts

  const handleFetchAstroInfo = () => {
    setLoading(true);
    setError("");

    getAstroInfo()
      .then((info) => {
        console.log("Fetched Astro info:", info);
        setAstroInfo(info);
      })
      .catch((error) => {
        console.error("Error fetching Astro info:", error);
        setError("Error fetching Astro info");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-[400px] border rounded-lg shadow-lg p-4 bg-white">
      <div className="text-xl font-bold mb-4">People in Space</div>
      <hr className="my-2" />
      <div className="mb-2">
        {loading ? (
          <p className="text-lg">Loading...</p>
        ) : error ? (
          <p className="text-lg text-red-600">{error}</p>
        ) : astroInfo && astroInfo.message === "success" ? (
          <>
            <p className="text-lg font-bold"> People in Space: {astroInfo.number}</p>
            <ul className="list-disc ml-4">
              {astroInfo.people.map((person, index) => (
                <li key={index} className="text-lg">
                  {person.name} - {person.craft}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-lg text-red-600">Failed to fetch Astro info</p>
        )}
      </div>
      <hr className="my-2" />
      <div className="flex justify-center">
        <button
          className="custom-button"
          onClick={handleFetchAstroInfo}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Refresh Astro Info"}
        </button>
      </div>
    </div>
  );
};

export default AstroCard;
