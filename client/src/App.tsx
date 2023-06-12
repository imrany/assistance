import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import Fallback from './pages/Fallback'
import Nav from './components/UI/Nav'
import { status } from './components/status'
import Notice from './components/UI/Notice'
import Settings from './pages/Settings'
import { request } from './components/indexDB'
import { useEffect, useState } from 'react'
import { loader } from './components/preloader'
import Footer from './components/UI/Footer'
import { dialog } from './components/func'
import Activity from './pages/Activity'
import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'
import Help from './pages/Help'

function App() {
  const [db,setDB]=useState<any>(null)
  function initDB(){
    loader.on()
    request.onsuccess=(event:any)=>{
        setDB(event.target.result)
        loader.off()
    }
    request.onerror=(event:any)=>{
      loader.off()
      console.log(event.target.result)
      dialog.open()
    }
  }
  useEffect(()=>{
    initDB()
  },[]);
  
  const globalContent={
    name:"Assistance",
    path:"/",
    db:db,
  };
  return (
    <>
    <div className='preload'>
      <p className='fixed max-sm:left-[42vw] left-[46vw] md:left-[48vw] top-[54vh] max-sm:text-base text-lg'>Loading...</p>
    </div>
    <GlobalContext.Provider value={globalContent}>
      <Router>
        <Notice notice={status()}/>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/sign_in" element={<Sign_in/>}/>
            <Route path="/auth/sign_up" element={<Sign_up/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/activity" element={<Activity/>}/>
            <Route path="/help" element={<Help/>}/>
            {/* <Route path="/settings" element={status().value?<Settings/>:<Fallback/>}/> */}
            <Route path="*" element={<Fallback/>}/>
          </Routes>
        <Footer/>
      </Router>
    </GlobalContext.Provider>
    </>
  )
}

export default App
