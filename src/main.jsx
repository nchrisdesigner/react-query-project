import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/GlobalStyles.js'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DarkModeProvider>
        <ErrorBoundary FallbackComponent={<ErrorFallback/>} onReset={() => window.location.replace("/")} >
          <App />
        </ErrorBoundary>
      </DarkModeProvider>
  </React.StrictMode>,
)
