import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && userId) navigate('/roadmap');
  };

  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <input placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Enter ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleSubmit}>Get Started</button>
    </div>
  );
}