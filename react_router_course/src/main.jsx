import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'


// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <App/>,
//   children: [
//     {
//       path: "",
//       element: <Home/>
//     }, 
//     {
//       path: "about",
//       element: <About/>
//     }
   
//   ]
// }

// ])

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<h1>Projects</h1>} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route
        path='github'
        element={<Github />} />
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
