// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  console.log(process.env.REACT_APP_APPWRITE_URL);
  return (
    <>
      <div>
        <h1>A blog app with appwrite</h1>
      </div>
    </>
  );
}

export default App;
