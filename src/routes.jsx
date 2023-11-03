import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./Pages/App";
import Layout from "./Layout/index.jsx"
import BlogDetail from "./Pages/BlogDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blog_detail",
        element: <BlogDetail />,
      }
    ]
  }
]);

export default router