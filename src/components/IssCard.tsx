import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
  } from "@nextui-org/react";

import React, { useState } from "react";
import { getIssLocation } from "../api/actions";
import { GiSpaceNeedle } from "react-icons/gi";

const IssCard: React.FC = () => {
    const [issLocation, setIssLocation] = useState<IssLocation | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const handleFetchLocation = () => {
      setLoading(true);
      setError("");
  
      getIssLocation()
        .then((location) => {
          console.log("Fetched ISS location:", location);
          setIssLocation(location);
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching ISS location");
          setLoading(false);
        });
    };
  
    return (
      <Card className="max-w-[400px]">
        <CardHeader>
          <h2 className="text-xl font-bold">International Space Station (ISS) Location</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col items-center">
            {issLocation ? (
              <>
                <GiSpaceNeedle style={{ width: "5rem", height: "5rem" }} className="mr-2" />
                <p className="text-lg">Latitude: {issLocation.latitude}</p>
                <p className="text-lg">Longitude: {issLocation.longitude}</p>
              </>
            ) : (
              <p className="text-lg">Click the button to fetch ISS location</p>
            )}
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex justify-center">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleFetchLocation}
              disabled={loading}
            >
              {loading ? "Fetching..." : "Fetch ISS Location"}
            </button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </CardFooter>
      </Card>
    );
  };
  
  export default IssCard;