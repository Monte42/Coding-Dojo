import './App.css';
import Groceries from './components/Groceries';
import MessageComponent from './components/MessageComponent';
import MyHeaderComp from './components/MyHeaderComp';

function App() {
  return (
    <div className="App">
      {/* "header" is just how we pass value to ours props obj */}
      <MyHeaderComp header={"Mr. 636"}> 
        <h2>YOLO!</h2>
        <p>hello world</p>
        <p>hello world!!</p>
        <h2>Monster</h2>
        <p>hello world!!</p>
        <p>goodbye</p>
      </MyHeaderComp>
      {/* from the first h2 down, these are call children elements.  You call them in the */}
      {/* components as 'props.children'.  This we render all the children on the page.   */}
      {/* The children property is an array and can be indexed like any array.  So we can */}
      {/* specific cheldren to choosen locations. */}


      <Groceries/>
      <br/><br/><hr/><br/><br/>

      <MessageComponent />
      <br/><br/><hr/><br/><br/>

    </div>
  );
}

export default App;
