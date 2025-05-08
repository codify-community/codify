import { Helmet, HelmetProvider } from "react-helmet-async"

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | codify" />
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1>Hello World</h1>
      </div>
    </HelmetProvider>
  )
}

export default App
