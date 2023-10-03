import './App.css';
import { useCounter } from './components/useCounter'

function App() {
  const [number, increase, decrease, reset] = useCounter();
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
