import React, { useState, useEffect } from 'react';

function CountdownTracker(props, {message}) {
  // Parse the target date and time
  let targetDate = new Date(Date.parse(props.target));

  // Set the starting time
  let start = Date.now();

  // Set the end time
  let end = targetDate.getTime();

  // Initialize the remaining time variable
  let [remainingTime, setRemainingTime] = useState('');

  // Update the remaining time every second
  useEffect(() => {
    let interval = setInterval(() => {
      // Calculate the remaining time
      let remaining = end - Date.now();

      // If the remaining time is less than or equal to 0, stop the countdown
      if (remaining <= 0) {
        clearInterval(interval);
        setRemainingTime('Done!');
        return;
      }

      // Calculate the remaining days, hours, minutes, and seconds
      let days = Math.floor(remaining / (24 * 60 * 60 * 1000));
      let hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      let minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
      let seconds = Math.floor((remaining % (60 * 1000)) / 1000);

      // Format the remaining time as a string
      let time = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the remaining time
      setRemainingTime(time);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Return the remaining time as the component output
  return <p>{remainingTime} + {props.message}</p>;
}

export default CountdownTracker;