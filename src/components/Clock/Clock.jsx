import { useEffect, useRef, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('tik');
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
    console.log(intervalId.current);
  };

  console.log(intervalId);

  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        stop
      </button>
    </div>
  );
};
