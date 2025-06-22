import './App.css';
import { CardList } from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a href='/' className='header__link'>Mood Tracker</a>
      </header>

      <CardList />
    </div>
  );
}

export default App;
