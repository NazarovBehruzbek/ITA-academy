import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AboutWe from './../AboutWe/AboutWe';
import CourseCategory from "./../CourseCategory/CourseCategory"
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Home/>, 
      },
      {
        path: "/about",
        element: <AboutWe />
      },
      {
        path: "/course/:id",
        element: <CourseCategory/>
      }
    ],
  },
]);

export default router;
