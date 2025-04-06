import './App.css'
import Display from './Display'
import { DisplayProvider } from './context/DisplayContext'

function App() {
  
  return (
    <DisplayProvider>
      <Display />
    </DisplayProvider>
  )
}

export default App
