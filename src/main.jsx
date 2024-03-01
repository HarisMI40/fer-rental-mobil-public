import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./../app/store";
import { Provider } from "react-redux";
import App from "./pages/App/App";
import CariMobil from "./pages/CariMobil/CariMobil";
import DetailMobil from "./pages/DetailMobil/DetailMobil";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Pembayaran from "./pages/Pembayaran/Pembayaran";
import Tiket from "./pages/Tiket/Tiket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cari-mobil",
    element: <CariMobil />,
  },
  {
    path: "/detail-mobil/:idCar",
    element: <DetailMobil />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/pembayaran",
    element: <Pembayaran />,
  },
  {
    path: "/tiket",
    element: <Tiket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
