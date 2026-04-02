import Sidebar from "./componentes/Sidebar"
import Schedule from "./componentes/Schedule"
import "./index.css"

function App() {
  return (
    <div className="container">
      <img src="/src/assets/logo.svg" alt="Logo" className="logo" />

      <Sidebar />
      <Schedule />
    </div>
  )
}

export default App