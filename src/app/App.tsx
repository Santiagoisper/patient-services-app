import { AppProviders } from './AppProviders.tsx'
import { AppRouter } from './AppRouter.tsx'
import './app.css'

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App
