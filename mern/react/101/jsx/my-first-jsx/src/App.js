import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 className='text-center'>Hello Dojo!</h1>
      <h2>Thing we need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>feed the dogs</li>
      </ul>
      <h2>Ninjas</h2>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Gary</td>
          <td>Du Mond</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Cristina</td>
          <td>Monroca</td>
          <td>31</td>
        </tr>
      </table>
      <h2>Add a new Ninja</h2>
      <form>
        <label htmlfor="firstName">First Name:</label>
        <input type="text" name="fistName" placeholder='John' id='firstName'/>
        {/* Another option to connect lables to inputs */}
        <label><br/>
          Last Name:
          <input type='text' name='lastName' placeholder='Doe'/>
        </label><br/>
        <label>
          Age:
          <input type='number' name='age' min='18' placeholder='18'/>
        </label><br/>
        <input type='submit' value="Submit"/>
      </form>
    </>
  );
}

export default App;
