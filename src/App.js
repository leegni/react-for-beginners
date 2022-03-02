//import Button from "./Button";
//import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello(){
  useEffect(()=>{
    console.log("created :>");
    //Cleanup function
    return () => console.log("destroyed :<");
  },[]);
  return <h1>Hello</h1>
}

function App() {
  const [counter,setValue]=useState(0);
  const [keyword,setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing(prev=>!prev);

  //console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  },[]);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  },[keyword]);
  useEffect(()=>{
      console.log("I run when 'counter' changes");
  },[counter]);
  useEffect(()=>{
    console.log("I run when 'keword & counter' changes");
},[keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <br/>
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default App;
