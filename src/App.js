import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Image from './Image'
import Video from "./Video";


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
      <h1>
        NASA'S PHOTO OF THE DAY <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      {data.media_type==='image' ? <Image data={data}/> : <Video data={data}/>}
    </div>
  );
}

export default App;

