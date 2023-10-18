import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./Pages/App";
import Layout from "./Layout/index.jsx"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
      ]
    }
  ]);

  export default router