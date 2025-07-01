import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './pages/MainPage/MainPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';
import { useEffect, useState } from 'react';

function App() {
  const [backColor, setBackColor] = useState('#FFFFFF');
  const [selectedCard, setSelectedCard] = useState(null);
  
  const moodsFromStorage = JSON.parse(localStorage.getItem("moodEntries")) || [];
  const dateToday = new Date().toISOString().split("T")[0]; 

  const getSelectedCard = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    const moodTodayFromStorage = moodsFromStorage.filter((mood) => mood.date === dateToday)[0];
    
    if (moodTodayFromStorage) {
      const moodClass = moodTodayFromStorage.mood.toLowerCase();
      setBackColor(moodClass);
    } else if (selectedCard) {
      setBackColor(selectedCard.className || '#FFFFFF');
    }
  }, [moodsFromStorage, dateToday]);

  return (
    <div className='app'>
      <div className='container'>
        <div className={`app__content ${backColor}-bg`}>
          {/* <header className='header'>
            <a href='/' className='header__link'>Mood Tracker</a>
          </header> */}
      
          <main className='main'>
            <Routes>
              <Route path='/' element={<MainPage onCardChange={getSelectedCard} />} />
              <Route path='/statistics' element={<StatisticsPage />} />
              <Route path='*' element={<div>Page Not Found</div>} />
            </Routes>
          </main>

          <footer className='footer'>
            <Navbar />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
