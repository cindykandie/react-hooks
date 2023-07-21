"use client"
// pages/data-fetching.js
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from the API (data.json)
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up the effect when the component unmounts
    return () => {
      console.log('Component unmounted. Clean up the effect here.');
    };
  }, []); // Empty dependency array means the effect runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetchingComponent;
