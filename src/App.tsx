import Home from "./pages/Home";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Home />
      <Toaster />
    </div>
  );
}

export default App;
