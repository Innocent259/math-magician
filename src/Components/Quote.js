import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
          headers: {
            'X-Api-Key': 'eis6AXpFYs0Fqz8ZroTDyg==Z0F0P9IoDN37lMpX',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setQuote(data[0]?.quote);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Unexpected error happened while fetching data.</p>;
  } else if (quote) {
    content = <div><p>{quote}</p></div>;
  }

  return <div>{content}</div>;
}
