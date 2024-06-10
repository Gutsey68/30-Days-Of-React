import { useEffect, useState } from 'react';

export default function DataLoading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 10000;
    const intervalDuration = 10;
    const totalSteps = totalDuration / intervalDuration;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      setProgress((currentStep / totalSteps) * 100);
      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setData('Here is the fetched data!');
        setLoading(false);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div>
        <div
          className="progress-bar-background"
          style={{
            width: '100%',
            backgroundColor: '#ccc',
            height: '20px',
            borderRadius: '10px'
          }}
        >
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
              backgroundColor: 'green',
              height: '100%',
              borderRadius: '10px'
            }}
          ></div>
        </div>
        <p>Loading... {Math.round(progress)}%</p>
      </div>
    );
  }

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
