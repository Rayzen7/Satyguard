import React, { useEffect, useState } from 'react';
import Good from './Good';
import Middle from './Middle';
import Bad from './Bad';
import axios from 'axios';

export const ResultMood = () => {
  const [mood, setMood] = useState(null);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const fetchMood = async () => {
      try {
        const response = await axios.get('http://localhost:7001/result');
        const moodProbability = response.data.mood.probability;
        setMood(moodProbability);
        setTimeout(() => setShowComponent(true), 100);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMood();
  }, []);

  if (!showComponent) {
    return <div></div>;
  }

  if (mood <= 30) {
    return <Bad />;
  } else if (mood > 30 && mood <= 65) {
    return <Middle />;
  } else {
    return <Good />;
  }
};