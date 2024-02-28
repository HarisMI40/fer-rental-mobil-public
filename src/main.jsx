import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/App/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CariMobil from "./pages/CariMobil/CariMobil.jsx";
import DetailMobil from "./pages/DetailMobil/DetailMobil.jsx";
<<<<<<< HEAD
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
=======
import Pembayaran from "./pages/Pembayaran/Pembayaran.jsx";
import Tiket from "./pages/Tiket/Tiket.jsx";

import store from "./../app/store";
import { Provider } from "react-redux";
>>>>>>> feature/halaman-pembayaran

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
<<<<<<< HEAD
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
=======
    path: "/pembayaran",
    element: <Pembayaran />,
  },
  {
    path: "/tiket",
    element: <Tiket />,
>>>>>>> feature/halaman-pembayaran
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
=======
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
>>>>>>> feature/halaman-pembayaran
);
