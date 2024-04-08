// Import CSS
import "./assets/css/main.css";

// Redux
import { Provider } from "react-redux";
import { store } from "./app/store/store";

// React Router
import { RouterProvider } from "react-router-dom";

// MUI
import { ThemeProvider } from "@mui/material/";

// CustomTheme
import { customTheme } from "./theme/customTheme.ts";

// Router
import { router } from "./Router.tsx";

// Framer Motion
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <ThemeProvider theme={customTheme}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
