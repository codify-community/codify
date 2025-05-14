import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicRoutes from "./routes/public";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | codify" />
      <PublicRoutes />
    </HelmetProvider>
  );
}

export default App;
