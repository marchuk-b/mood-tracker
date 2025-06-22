import './App.css';
import { CardList } from './components/CardList/CardList';

function App() {
  const cardsData = [
      {id: 1, name: 'Angry', className: 'angry', emoji: require('./assets/emoji/angry.png')},
      {id: 2, name: 'Upset', className: 'upset', emoji: require('./assets/emoji/upset.png')},
      {id: 3, name: 'Sad', className: 'sad', emoji: require('./assets/emoji/sad.png')},
      {id: 4, name: 'Good', className: 'good', emoji: require('./assets/emoji/good.png')},
      {id: 5, name: 'Happy', className: 'happy', emoji: require('./assets/emoji/happy.png')},
      {id: 6, name: 'Spectacular', className: 'spectacular', emoji: require('./assets/emoji/spectacular.png')},
  ]

  return (
    <div className="App">
      <header className='header'>
        <a href='/' className='header__link'>Mood Tracker</a>
      </header>

      <CardList cardsData={cardsData} />
    </div>
  );
}

export default App;
