import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/themeProvider'
import PublicRoutes from './routes/public'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="codify-ui-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | codify" />
        <PublicRoutes />
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App
