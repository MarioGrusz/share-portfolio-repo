import { useState, useEffect } from 'react';

const LocalTime = ({ timeZone }) => {

    
    const [localTime, setLocalTime] = useState('');

    const getLocalTime = () => {
        const currentTime = new Date().toLocaleString('en-US', {
          timeZone,
          timeStyle: 'medium',
          hourCycle: 'h24',
        });
        setLocalTime(currentTime);
    };

    useEffect(() => {
        getLocalTime();
        const interval = setInterval(() => {
          getLocalTime();
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
    }, []);

    return <div id="city-time">{localTime}</div>;
  
}

export default LocalTime