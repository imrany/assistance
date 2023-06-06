import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Fallback from './pages/Fallback'
import Nav from './components/Nav'
import Footer from './components/Footer'

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
            <Route path="/" element={<Home/>}/>
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
