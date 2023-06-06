import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Fallback from './pages/Fallback'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { status } from './components/status'

function App() {
  const globalContent={
    name:"Assistance",
    path:"/"
  }
  
  return (
    <>
    <GlobalContext.Provider value={globalContent}>
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={status().value?<Home/>:<Fallback/>}/>
            <Route path='/fallback' element={<Fallback/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </Router>
    </GlobalContext.Provider>
    </>
  )
}

export default App
