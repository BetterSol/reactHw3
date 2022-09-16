import './App.css';
import ClassComponent from './components/classComponent';
import {useState } from "react";
import FuncComponent from './components/funcComponent';

const App = () => {
  const [show, setShow] = useState(true)

  return(
    <div className="App">
        <button onClick={()=> setShow ((prevState) => !prevState)}>HoHoHo</button>
      <ClassComponent name={"Logos"} show={show}/>
      <FuncComponent show={show}/>
    </div>
  )
}

export default App;
