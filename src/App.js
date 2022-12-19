import Home from "./components/screens/Home";
import { Context1Provider } from "./context/context1";
function App() {
  return (
    <div className="App">
      <Context1Provider>
        <Home />
      </Context1Provider>
    </div>
  );
}

export default App;
