import logo from './logo.svg';
import './App.css';

function makeTable() {
  const table = <table><tbody></tbody></table>;
}

function App() {
  return (
    <div className="App">
      <table onClick={e => console.log(e)}>
      <tbody>
        <tr><td>_</td><td>_</td><td>_</td></tr>
        <tr><td>_</td><td>_</td><td>_</td></tr>
        <tr><td>_</td><td>_</td><td>_</td></tr>
      </tbody>
      </table>

    </div>
    
  );
}

export default App;
