import { Toaster } from "react-hot-toast"
import Router from "./routes"

const App: React.FC = () => {
  return(
    <div className="py-2 h-screen flex items-center justify-center">
      <Toaster/>
      <Router />
    </div>
  )
}

export default App
