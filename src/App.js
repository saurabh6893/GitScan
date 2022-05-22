import Navbar from './Components/Layouts/Navbar'
import Footer from './Components/Layouts/Footer'
import Alerts from './Components/Layouts/Alerts'
import About from './Pages/About'
import Home from './Pages/Home'
import { AlertProvider } from './Context/Alert/AlertContext'
import { GithubProvider } from './Context/Github/GithubContext'
import NotFound from './Pages/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './Pages/User'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-13'>
              <Alerts />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/User/:login' element={<User />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
