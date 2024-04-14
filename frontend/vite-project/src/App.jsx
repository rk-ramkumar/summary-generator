import { useEffect } from 'react';
import './App.css';
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-gray100 font-sans antialiased'>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
