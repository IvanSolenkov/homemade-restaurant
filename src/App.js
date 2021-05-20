import Navbar from "./Components/Navbar/Navbar";
import AppRouter from "./AppRouter";
import './index.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
