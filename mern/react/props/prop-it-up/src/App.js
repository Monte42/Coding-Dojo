import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>My People</h1>
      <PersonCard firstName={"Gary"} lastName={"Du Mond"} age={35} hairColor={"Brown"} />
      <PersonCard firstName={"Cristina"} lastName={"Manocu"} age={26} hairColor={"Blond"} />
      <PersonCard firstName={"Shara"} lastName={"Mumphree"} age={29} hairColor={"Red"} />
      <PersonCard firstName={"John"} lastName={"Griggs"} age={18} hairColor={"Black"} />
    </div>
  );
}

export default App;
