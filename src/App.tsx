import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <div className="text-[50px]">count: {count}</div>;
}

export default App;
