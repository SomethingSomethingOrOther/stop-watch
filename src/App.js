import {useState,useEffect} from "react"
import './App.css';

function App() {
  const [time,setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)

  useEffect(()=>{
    let intervalId
    if (isRunning){
      intervalId= setInterval(()=>{
        setTime(prevtime=>prevtime + 1)
      },1000)
    }else {
      clearInterval(intervalId)
    }
    return ()=>clearInterval(intervalId)
  },[isRunning])
   
const handleStartStop=()=>{
    setIsRunning(prevIsRunning=>!prevIsRunning)
}
const handleReset = () => {
  setTime(0);
  setIsRunning(false);
};

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div>
      <h1>Stopwatch</h1>
      <p style={{fontSize:"3rem"}}>Time: {time} seconds</p>
      <button style={{cursor:"pointer",border:"none",padding:"0.5rem",backgroundColor:"blue",
      borderRadius:"2rem",color:"white",fontSize:"2rem"}} onClick={handleReset}>Reset</button>
     
      <button style={{margin:"2rem",cursor:"pointer",border:"none",padding:"0.5rem",backgroundColor:"blue",
      borderRadius:"2rem",color:"white",fontSize:"2rem"}} onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      </div>
       </div>
  );
}

export default App;
