import logo from "./logo.svg";
import "./App.css";
import Dot from "./Dot";
import Round from "./Round";
import ProgressBar from 'react-animated-progress-bar';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import modalOne from "./modalOne"

function App() {
  const [percentage, setPercentage] = useState(0); 
  const [isOpen1, setIsOpen1] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="App">      
      <input type="submit" value="Submit" onClick={() => setShow(!show)}></input>          
      <ProgressBar
      width="400px"
      height="18px"
      rect
      fontColor="gray"
      marginLeft="50px"
      percentage="90"
      rectPadding="1px"
      rectBorderRadius="20px"
      trackPathColor="transparent"
      trackBorderColor="#0dc5c1"
      backgroundColor="#0dc5c1"
    />  
      <div style={{ width: 150, marginBottom: 30, marginTop: 20 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className="wrapper">
         {isOpen1}
        <div className="box">
          <h3>Loader 1</h3><Dot></Dot>
        </div>
        <div className="box">
          <h3>Loader 2</h3><Round></Round>
        </div>
      </div>
      <ProgressBar
      width="500px"
      height="10px"
      fontColor="#0dc5c1"
      trackWidth="10"
      percentage="100"
      trackPathColor="white"
      trackBorderColor="#ccc"
      hollowBackgroundColor="white"
      defColor={{
        fair: 'orangered',
        good: 'yellow',
        excellent: '#0dc5c1',
        poor: 'red',
      }}/>
    </div>
  );
}

export default App;
