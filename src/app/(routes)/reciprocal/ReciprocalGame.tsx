'use client';

import { randomHeading, headingReciprocal } from '@/utils/math';
import { useEffect, useState } from 'react';

// TODO: make Input component (min, max, disabled chars, etc)

export default function ReciprocalGame() {
  const [started, setStarted] = useState(false);
  const [heading, setHeading] = useState<number | undefined>(undefined);
  const [reciprocal, setReciprocal] = useState<number | undefined>(undefined);
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [correct, setCorrect] = useState<boolean | undefined>(undefined);

  const handleStart = () => {
    setStarted(true);
    setHeading(randomHeading());
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) return setInputValue('');

    const num = Number(value);
    if (num < 1 || num > 36) return;
    setInputValue(num);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCorrect(inputValue === reciprocal);
  };

  useEffect(() => {
    setCorrect(undefined);
    if (typeof heading === 'number') setReciprocal(headingReciprocal(heading));
  }, [heading]);

  useEffect(() => {
    console.log({ heading });
  }, [heading]);

  useEffect(() => {
    console.log({ reciprocal });
  }, [reciprocal]);

  useEffect(() => {
    console.log({ inputValue });
  }, [inputValue]);

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

      <p>Heading: {heading}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="reciprocal-input">Reciprocal:</label>
        <input
          id="reciprocal-input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(evt) =>
            ['e', 'E', '+', '-', '.'].includes(evt.key) && evt.preventDefault()
          }
        />
        <button type="submit">Submit</button>
      </form>

      {correct && <p>Correct!</p>}
      {correct === false && <p>Incorrect :( Answer: {reciprocal}</p>}
    </>
  );
}
