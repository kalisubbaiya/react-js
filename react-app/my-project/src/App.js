// rafce  - React Arrow Funtion Export Component

import React, {useEffect, useState} from 'react'
import Child from './Child';

const App = () => {

  const [name, setName]= useState("React");
  const [show, setShow]= useState(true);

  useEffect(()=>{
    console.log("useEffect", "ComponentDidMount");
  }, [name]);

  return (
    <div>App{" "}
      {name} {" "}
      <button onClick={()=>setName("JS")}>Update Name</button> {" "}
      <button onClick={()=>setShow(!show)}>Update Show</button>
      {show ? <Child /> : null}
    </div>
  )
}

export default App