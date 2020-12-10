import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Image from './Image'
import Video from "./Video";
import styled from 'styled-components'


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
    <StyledApp className="App">
      <h1>
        NASA'S PHOTO OF THE DAY <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <p> Today's date: {data.date}</p>
      <h3>{data.title}</h3>
      {data.media_type==='image' ? <Image data={data}/> : <Video data={data}/>}
      <div className = 'description'>
        
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  p{
    text-decoration: underline;
  }
`


export default App;

