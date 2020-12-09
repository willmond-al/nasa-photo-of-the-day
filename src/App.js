import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {

const [data, setData] = useState([])

useEffect(() => {

  axios
.get('https://api.nasa.gov/planetary/apod?api_key=5ZvwTBmFiSuDDQCU6srtFE12FuSh0Rm6lgFihzQT')
.then(res => {
  setData(res.data)
})
.catch(err=>{
  console.log('err')
})

}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
