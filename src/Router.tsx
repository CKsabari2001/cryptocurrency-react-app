// Pages
import Home from "./components/pages/Home.tsx";
import CryptoCurrencies from "./components/pages/CryptoCurrencies.tsx";
import CryptoDetails from "./components/pages/CryptoDetails.tsx";
import News from "./components/pages/News.tsx";
import Error404 from "./components/pages/Error404.tsx";

// React Router
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/cryptocurrencies",
    element: <CryptoCurrencies />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/cryptocurrencies/coins/:coinId",
    element: <CryptoDetails />,
  },
]);
