import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;

        // Reset seconds and decrease minutes
        setMinutes((prevMinutes) => {
          if (prevMinutes > 0) return prevMinutes - 1;

          // Reset minutes and decrease hours
          setHours((prevHours) => {
            if (prevHours > 0) return prevHours - 1;

            // Reset hours and decrease days
            setDays((prevDays) => {
              if (prevDays > 0) return prevDays - 1;
              clearInterval(intervalId); // Stop timer at zero
              return 0;
            });

            return 23; // Reset hours
          });

          return 59; // Reset minutes
        });

        return 59; // Reset seconds
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max justify-center sm:justify-start mx-auto sm:mx-0 px-4 sm:px-0 ">
      {" "}
      <div className="flex flex-col p-4 w-20 bg-gray-400 rounded-lg text-black">
        <span className="font-bold text-2xl">{days}</span>
        <span className="text-base">Days</span>
      </div>
      <div className="flex flex-col p-4 w-20 bg-gray-400  rounded-lg text-black">
        <span className="font-bold text-2xl">{hours}</span>
        <span className="text-base">Hours</span>
      </div>
      <div className="flex flex-col p-4 w-20 bg-gray-400 rounded-lg text-black">
        <span className="font-bold text-2xl">{minutes}</span>
        <span className="text-base">Min</span>
      </div>
      <div className="flex flex-col p-4 w-20 bg-gray-400  rounded-lg text-black">
        <span className="font-bold text-2xl">{seconds}</span>
        <span className="text-base">Sec</span>
      </div>
    </div>
  );
}
