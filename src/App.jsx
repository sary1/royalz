import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
    </div>
  );
}

export default App;
