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

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
