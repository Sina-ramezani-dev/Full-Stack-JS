import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((res) => setHealth(res.data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Frontend React</h1>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </div>
  );
}

export default App;
