import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [binary, setBinary] = useState("");

  return (
    <div className="app-container">
      <h1>Convert Bin To Dec</h1>
      <div className="app-content">
        <Card>
          <div className="app-card-content">
            <input
              className="app-input"
              type="text"
              value={binary}
              onChange={(event) => setBinary(event.target.value)}
            />

            <div>
              <h2>0101010111</h2>
            </div>
          </div>
        </Card>
        <div className="btns-container">
          <button className="btn-primary with-shadow">Converter</button>
        </div>
      </div>
    </div>
  );
};

export default App;
