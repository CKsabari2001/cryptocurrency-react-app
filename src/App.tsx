// Import CSS
import "./assets/css/main.css";

// Pages
import Home from "./components/Home.tsx";
import CryptoCurrencies from "./components/CryptoCurrencies.tsx";
import CryptoDetails from "./components/CryptoDetails.tsx";
import News from "./components/News.tsx";
import Error404 from "./components/Error404.tsx";

// Redux
import { Provider } from "react-redux";
import { store } from "./app/store/store";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// MUI Custom Theme
import { createTheme, ThemeProvider } from "@mui/material/";

const router = createBrowserRouter([
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
    path: "/coins/:coinId",
    element: <CryptoDetails />,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",

    h1: {
      fontFamily: "'Roboto', sans-serif",
    },
    h2: {
      fontFamily: "'Roboto', sans-serif",
    },
    h3: {
      fontFamily: "'Roboto', sans-serif",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
