import CourseDetails from "@/pages/CourseDetail";
import Courses from "@/pages/Courses";
import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courses/:id",
    element: <CourseDetails />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
