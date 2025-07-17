import { createBrowserRouter } from "react-router-dom"
import App from "../App.tsx"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Game from "../pages/Game"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "game", element: <Game /> }
    ]
  }
])