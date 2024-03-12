import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://catfact.ninja/fact");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>{(data as { fact: string }).fact}</h1>
          <p>Length: {(data as { fact: string }).fact.length}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default User;
