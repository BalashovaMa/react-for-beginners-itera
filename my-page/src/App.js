
import './App.css';
import data from './data.json'

function App() {
  const {name, shortBiography, contacts} = data;
  return (
    <div className="App">
       <h1>{name}</h1>
       <div>{shortBiography}</div>
       <a href={contacts}>Telegram</a>
    </div>
  );
}

export default App;
