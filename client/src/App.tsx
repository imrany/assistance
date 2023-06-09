import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import Fallback from './pages/Fallback'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { status } from './components/status'
import Notice from './components/Notice'
import Settings from './pages/Settings'

function App() {
  const globalContent={
    name:"Assistance",
    path:"/"
  };
  return (
    <>
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
