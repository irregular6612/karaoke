import './App.css';
import axios from 'axios';

const URL = "/results?search_query=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC";


function App() {
  return (
    <div>hello
      <button onClick = { () => {axios.get(URL).then( data => {console.log(data)})} }>please push it.</button>
    </div>
  );
}

export default App; 
