import { useState } from "react";
import "./App.css";
import "./assets/icon.png"

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = () => {};

  return (
    <>
      <div>
        <img href=""></img>
      </div>
      <div className="flex">
        <h1>PASSWORD GENERATOR</h1>
        <input type="text" value={password} placeholder="password"></input>
      </div>
    </>
  );
}

export default App;
