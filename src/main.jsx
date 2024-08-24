import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Work from './components/Work/Work.jsx';
import Layout from './Layout.jsx';
import Not_found from './components/not-found/Not_found.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
     <Route path='/' element={<App/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/Work' element={<Work/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/*' element={<Not_found/>} />

    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
