import './App.css';
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Route>
  )
)
function App() {

  return (
    <div className='flex flex-col min-h-screen bg-gray100 font-sans antialiased'>
      <NavBar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
