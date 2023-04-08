import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  var [count, setCount] = useState(0);

  const county = () => {
    console.log(`fun is hitting`);
    setCount(count + 1);
  };

  const empinfo = [
    {
      id: 1,
      name: "Abhi",
      age: "19",
      branch: "mech"
    },
    {
      id: 2,
      name: "virat",
      age: "19",
      branch: "mech"
    },
    {
      id: 3,
      name: "Rohit",
      age: "19",
      branch: "CS"
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <label>lets have count</label>
      <br></br>
      <input type="button" value="click me" onClick={() => county()} />
      <label>{count}</label>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Department</td>
          </tr>
        </thead>
        <tbody>
          {empinfo.map((dt) => {
            console.log(dt);
            return (
              <>
                <tr key={dt.id}>
                  <td>{dt.name}</td>
                  <td>{dt.age}</td>
                  <td>{dt.branch}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
