import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AutomaticBatching from "./components/AutomaticBatching";
import Layout from "./components/Layout";
import Transitions from "./components/Transitions";
import DeferredValue from "./components/DeferredValue";
import ExternalStore from "./components/ExternalStore";
import UseId from "./components/UseId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AutomaticBatching />,
      },
      {
        path: "transitions",
        element: <Transitions />,
      },
      {
        path: "useid",
        element: <UseId />,
      },
      {
        path: "deferredvalue",
        element: <DeferredValue />,
      },
      {
        path: "externalstore",
        element: <ExternalStore />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
