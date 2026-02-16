import './App.css'
import ConverterProvider from './providers/converterProvider'
import OverworldConverter from './components/OverworldConverter'
import NetherConverter from './components/NetherConverter'
import CurrentCoords from './components/Current'

function App() {
  return (
    <ConverterProvider>
      <CurrentCoords />
      <OverworldConverter />
      <NetherConverter />
    </ConverterProvider>
  )
}

export default App
