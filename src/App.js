import logo from './logo.svg';
import './App.css';
// import Sample from "./simplecomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="para">hello this is paragraph</p>
      {/* <Sample/> */}
      <a
          className="App-link"
          // href="./simplecomponent.js"
          href="./component2.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          click
        </a>
      
    </div>
    
  );
}

export default App;
