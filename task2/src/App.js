import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Interviewsetting from './Component/Interview Settings'
import Jobdetails from './Component/Job Details'
import RequistionDetails from './Component/Requistion Details'
import draft from './Component/Draft'
function App() {
  return (
    <>
    <Header />
    <draft />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <RequistionDetails />}/>
          <Route path="/emp" element={<Jobdetails />} />
          <Route path="/prj" element={<Interviewsetting />} />
        </Routes>
      </BrowserRouter>
    </>
      )
    }
    
    export default App
