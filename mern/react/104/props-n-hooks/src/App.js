import './App.css';
import { FirstCounter } from './components/FirstCounter';
import CreateList from './components/hooks/CreateList';
import { SecondCounter } from './components/SecondCounter';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <FirstCounter />
      <SecondCounter />
      <br/><br/>
      <CreateList />
    </div>
  );
}

export default App;
