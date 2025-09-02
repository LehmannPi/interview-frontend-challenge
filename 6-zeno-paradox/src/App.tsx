import { useEffect, useRef, useState } from 'react';

function App() {
  const lead = 200; // initial tortoise head start (px)
  const vA = 10; // Achilles speed
  const vT = 6; // Tortoise speed
  let scale = 3; // scaling factor (try 2, 3, 5, etc.)

  const [xA, setXA] = useState(0); // Achilles position
  const [xT, setXT] = useState(lead); // Tortoise position
  const [checkpoints, setCheckpoints] = useState<number[]>([lead]);

  const stepRef = useRef(0); // plain counter, not React state

  useEffect(() => {
    const timer = setInterval(() => {
      const step = stepRef.current;

      // if (step > 20) {
      //   clearInterval(timer);
      //   return;
      // }

      setXA((prevXA) => {
        const lastTortoisePos = checkpoints[step];
        const timeToReach = (lastTortoisePos - prevXA) / vA;

        const newXA = lastTortoisePos;
        const newXT = xT + vT * timeToReach;

        setXT(newXT);
        setCheckpoints((prev) => [...prev, newXT]);

        stepRef.current += 1;
        scale++;

        return newXA;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [checkpoints, xT]);

  return (
    <div className="flex flex-col w-[100vw] p-8 h-[100vh]">
      <h2>Zeno's Paradox: Achilles & the Tortoise</h2>
      <p>
        Achilles always runs to the tortoise’s previous spot, but the tortoise
        moves ahead each time. His movement describes an asymptote - a curve
        that approaches but never touches or crosses the limit (which, in this
        case, is given by the tortoise).
      </p>

      <div
        style={{
          position: 'relative',
          height: '200px',
          border: '1px solid #ccc',
          overflowX: 'scroll',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Zeno checkpoints */}
        {checkpoints.map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pos * scale,
              top: 120,
              width: 2,
              height: 40,
              background: 'red',
            }}
          />
        ))}

        {/* Achilles */}
        <div
          style={{
            position: 'absolute',
            left: xA * scale,
            top: 40,
            transition: 'left 0.5s linear',
          }}
        >
          🏃‍♂️ Achilles
        </div>

        {/* Tortoise */}
        <div
          style={{
            position: 'absolute',
            left: xT * scale,
            top: 80,
            transition: 'left 0.5s linear',
          }}
        >
          🐢 Tortoise
        </div>
      </div>
      {/* Debug info */}
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>Step: {stepRef.current}</p>
        <p>
          Achilles: {xA.toFixed(1)}px (scaled: {xA * scale}px)
        </p>
        <p>
          Tortoise: {xT.toFixed(1)}px (scaled: {xT * scale}px)
        </p>
        <p>Scale: {scale}x</p>
      </div>
    </div>
  );
}

export default App;
