import { useState } from "react";
import "./App.css";

const App =()=> {
  const [count, setCount] = useState(0);

  const handleAdd  = () =>{
    setCount( count+1);
  }
  const handleSubstract  = () =>{
    setCount( count-1);
  }

  const handleReset  = () =>{
    setCount(0);
  }
return(
<div className="container">
<h1>counter: {count} </h1>
<hr />
<button onClick={handleReset}>reset</button>
<button onClick={handleSubstract}>-</button>
<button onClick={handleAdd}>+</button>
</div>
);

};

export default App;
