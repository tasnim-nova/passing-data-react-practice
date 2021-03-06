import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const nayoks =['Ananta', 'Jashim', 'Kanchon']
  const hobbys =['Traveling', 'teaching', 'social work']
  return (
    <div className="App">
      <Movie></Movie>
            <Nayok name='shakib Khan' hobby='dancing'></Nayok>
            <Nayok name='srk' hobby='boxing'></Nayok>
            <Nayok name='dipjol' hobby='fighting'></Nayok>
            <Nayok name={nayoks[0]} hobby={hobbys[0]}></Nayok>
            <Nayok name={nayoks[1]} hobby={hobbys[1]}></Nayok>
            <Nayok name={nayoks[2]} hobby={hobbys[2]}></Nayok>
            <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Movie(props) {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+1);
  return (
    <div>
      <h2>Movie Count: {count}</h2>
      <button onClick={handleClick}>Add Movie</button>
      <MoviesActed movie={count*100}></MoviesActed>
    </div>
  )
}

function MoviesActed(props) {
  return <div>
    Number of Movies Income: {props.movie}
  </div>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px',
  }
  return( 
    <div style={nayokStyle}>
     <h1>I'm {props.name}</h1>
     <p>My Hobby is { props.hobby}</p>
     </div>
     )
}
export default App;
