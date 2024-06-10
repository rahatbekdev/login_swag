import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import Layout from "../layout/Layout";
import QuoteList from "../copmonents/quote/QuoteList";
import QuoteForm from "../copmonents/quote/QuoteForm";
import { SingleQuote } from "../copmonents/quote/SingleQuote";
import Layout from "../store/layout/Layout";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Navigate to="/quotes" />,
        },

        {
          path: "/quotes",
          element: <QuoteList />,
        },

        {
          path: "/add-quote",
          element: <QuoteForm />,
        },
        {
          path: "/quotes/:id",
          element: <SingleQuote />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
