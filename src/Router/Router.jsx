import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path:"/",element:<Home/>},
      ]
    },
  ]);

  export default router;