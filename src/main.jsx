import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Service from './pages/service/Service.jsx';
import Resume from './pages/resume/Resume.jsx';
import Project from './pages/project/Project.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
      {
        path: "/project",
        element: <Project/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
