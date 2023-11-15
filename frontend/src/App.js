import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import styles from "./App.module.css";

import Navigation from "./components/MainNavigation";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import KidsPage from "./pages/KidsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "/women", element: <WomenPage /> },
      { path: "/men", element: <MenPage /> },
      { path: "/kids", element: <KidsPage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
