
import './App.css';
import Card from './components/Card'
import data from './data.json'
import styles from './components/Card.module.css'
function App() {
  return (
    <div className="App">
     
      
      <div className={styles.container}>
        {data.map(card => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
