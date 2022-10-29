import './App.css';
import UserForm from './components/UserForm';
import PersonCard from './components/PersonCard';

// rafce creates boiler 


const pdata = [
  {firstName:"Frank", lastName:"Bauldwin", age:41, hairColor:"White"},
  {firstName:"Allen", lastName:"Jackson", age:14, hairColor:"Black"},
  {firstName:"Karly", lastName:"Simmons", age:25, hairColor:"Purple"},
  {firstName:"Jane", lastName:"Doe", age:22, hairColor:"Blonde"},
]

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>My People</h1>
      <PersonCard firstName={"Gary"} lastName={"Du Mond"} age={35} hairColor={"Brown"} />
      <PersonCard firstName={"Cristina"} lastName={"Manocu"} age={26} hairColor={"Blonde"} />
      <PersonCard firstName={"Shara"} lastName={"Mumphree"} age={29} hairColor={"Red"} />
      <PersonCard firstName={"John"} lastName={"Griggs"} age={18} hairColor={"Black"} />
      {
        pdata.map( p => <PersonCard firstName={p.firstName} lastName={p.lastName} age={p.age} hairColor={p.hairColor} /> )
      }
      <UserForm/>
    </div>
  );
}

export default App;
