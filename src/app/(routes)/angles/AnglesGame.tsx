'use client';

import { useEffect, useState } from 'react';

export default function AnglesGame() {
  const [started, setStarted] = useState(false);
  const [angles, setAngles] = useState<[number, number] | undefined>(undefined);

  const handleStart = () => {
    setStarted(true);
    setAngles([0, 0]);
  };

  return (
    <>
      {started ? (
        <button
          onClick={() => {
            setStarted(false);
            handleStart();
          }}
        >
          Reset
        </button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}

      <p>
        angles: {angles?.[0]}, {angles?.[1]}
      </p>
    </>
  );
}
