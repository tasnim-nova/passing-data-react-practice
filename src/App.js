import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <Nayok></Nayok>
            <Nayok></Nayok>
            <Nayok></Nayok>
            <Nayok></Nayok>
            <Nayok></Nayok>
            <Nayok></Nayok>
            <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Nayok(prop) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px',
  }
  return <div style={nayokStyle}>
     <h1>I'm Hero</h1>
     <p>My Hobby is Singing</p>
     </div>
}
export default App;
