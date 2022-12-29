import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/Task/AddTask";
import Task from "../components/Task/Task";
import Dashboard from "../components/Dashboard";
import ForgetPassword from "../components/ForgetPassword";
import Login from "../components/Login";
import Register from "../components/Register";
import ResetPassword from "../components/ResetPassword";
import User from "../components/User";
import Main from "../layout/Main";
import MyTasks from "../components/Task/MyTasks";
import UpdateTask from "../components/Task/UpdateTask";
import CompletedTask from "../components/Task/CompletedTask";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/user",
        element: <User></User>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/admin",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/task",
        element: <Task></Task>,
      },
      {
        path: "/add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "/my-tasks",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "completed-task",
        element: (
          <PrivateRoute>
            <CompletedTask></CompletedTask>
          </PrivateRoute>
        ),
      },
      { path: "/update-task", element: <UpdateTask></UpdateTask> },
      {
        path: "*",
        element: (
          <div>
            <h2>There is no content here</h2>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h2>There is no content here</h2>
      </div>
    ),
  },
]);

export default router;
