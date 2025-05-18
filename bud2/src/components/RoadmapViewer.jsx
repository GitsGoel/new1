import { useEffect, useState } from 'react';
import { getRoadmap } from '../api/roadmapApi';

export default function RoadmapViewer() {
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    getRoadmap().then(data => setRoadmap(data));
  }, []);

  if (!roadmap) return <p>Loading roadmap...</p>;

  return (
    <div className="roadmap">
      {roadmap.map((step, idx) => (
        <div key={idx} className="step">{step}</div>
      ))}
    </div>
  );
}
