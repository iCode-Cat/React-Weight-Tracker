
import './App.css';
import axios from 'axios';


function App() {

  const save = () => {
    
    axios.post('http://localhost:5001', {username:'BOBOv2'})
    .then((post) => console.log(post))

  }

  return (
    <div className="App">
      <button onClick={save} >TEST</button>
    </div>
  );
}

export default App;
