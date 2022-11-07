import './App.css';
import TabsComponent from './components/TabsComponent';

function App() {
  const testArr = [
    {title:"My rides",content:["Corvette", "Ninja ZX6R", "S83 Suzuki"]},
    {title:"My Homes", content:["Gb MA", "SB CA"]},
    {title:"My Languages", content:["Python", "Javascript", "Java", "CSS", "HTML","PHP","Ruby","C++"]},
    {content:["Please select a tab"]}
  ]

  return (
    <div className="App">
      <TabsComponent contentArr={testArr}/>
    </div>
  );
}

export default App;
