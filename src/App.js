
import './App.css';
import Card from './components/Card'
import data from './data.json'
function App() {
  return (
    <div className="App">
     
      {data.map(card => (
        
        <Card {...card}/>
      ))}
    </div>
  );
}

export default App;
