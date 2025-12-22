import './App.css'
import Layout from './Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const routes = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> }, 
        { path: 'contact', element: <Contact /> },
        { path: 'portfolio', element: <Portfolio /> }
      ]
    }    
  ], {
    basename: '/Srart-Framework/'
  });

  return (
    <RouterProvider router={routes} />
  )
}

export default App
