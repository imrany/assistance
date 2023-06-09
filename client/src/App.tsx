import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import Fallback from './pages/Fallback'
import Nav from './components/Nav'
import { status } from './components/status'
import Notice from './components/Notice'
import Settings from './pages/Settings'
import { request } from './components/indexDB'
import { useEffect, useState } from 'react'
import { loader } from './components/preloader'
import Footer from './components/Footer'

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
    }
  }

  useEffect(()=>{
    initDB()
  },[]);
  
  const globalContent={
    name:"Assistance",
    path:"/",
    db:db
  };
  return (
    <>
    <div className='preload'></div>
    <GlobalContext.Provider value={globalContent}>
      <Router>
        <Notice notice={status()}/>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
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
