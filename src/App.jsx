import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Singledata from "./page/Singledata";




function App() {  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo/:id" element={<Singledata/>}/>
    </Routes>
  )
}

export default App
