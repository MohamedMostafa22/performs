import { defaultTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./pages/Layout";

const queryClient = new QueryClient();
const theme = createTheme(defaultTheme);

function App() {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Layout>{content}</Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
