import React, { useEffect, useState } from "react";
import { fetchGreeting } from "../services/api";

function Greeting() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGreeting()
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return <h2>{message}</h2>;
}

export default Greeting;