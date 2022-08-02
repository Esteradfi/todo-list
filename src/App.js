import './App.css';
import Header from "./components/Header/Header";
import TodoDisplay from "./components/TodoDisplay/TodoDisplay";

function App() {

  return (
    <div className="App">
      <Header />
        <TodoDisplay />
    </div>
  );
}

export default App;