import './App.css';
import { FirstCounter } from './components/FirstCounter';
import { SecondCounter } from './components/SecondCounter';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <FirstCounter />
      <SecondCounter />
    </div>
  );
}

export default App;
