import React, { useState } from 'react';
import './RandomNumber.css';

const MIN = 1;
const MAX = 100;

function RandomNumber() {
  const [number, setNumber] = useState(null);
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0); // used to re-trigger animation

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    setNumber(random);
    setCount(prev => prev + 1);
    setKey(prev => prev + 1); // remount number to replay animation
  };

  const isEven = number !== null && number % 2 === 0;
  const isGenerated = number !== null;

  return (
    <div className="wrapper">
      <div className="grid-bg" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className="card">
        <p className="label">Random Number Generator</p>

        {/* Number display */}
        <div className={`number-box ${isGenerated ? 'has-number' : ''}`}>
          {isGenerated ? (
            <span className="number" key={key}>{number}</span>
          ) : (
            <span className="placeholder">No number generated yet</span>
          )}
        </div>

        {/* Range hint */}
        <p className="range-hint">Range: {MIN} – {MAX}</p>

        {/* Generate button */}
        <button className="btn-generate" onClick={handleGenerate}>
          <span>⚡ Generate Random Number</span>
        </button>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-label">Attempts</span>
            <span className="stat-value">{count}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Last was</span>
            <span className="stat-value">
              {isGenerated ? (isEven ? 'Even' : 'Odd') : '—'}
            </span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Max</span>
            <span className="stat-value">{MAX}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomNumber;
