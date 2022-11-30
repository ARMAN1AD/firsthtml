import logo from './logo.svg';
import './App.css';
import Arman from './Arman';
function App() {

  const onSubmit = () => {
    alert("hello this is Arman here !")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Arman Asgar  Dasdddddilkush Saquib Lakhan</h1>
        </p>

        <button className='btn'
          onClick={onSubmit}>here</button>

      </header>
      <Arman />

    </div>
  );
}

export default App;
