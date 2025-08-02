import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './pages/MainPage/MainPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';
import { useContext, useEffect, useState } from 'react';
import { MoodContext } from './hooks/MoodContext';

function App() {
  const {dateToday, moodsFromStorage} = useContext(MoodContext);
  const [backColor, setBackColor] = useState('#FFEFE5');
  const [selectedCard, setSelectedCard] = useState(null);

  const getSelectedCard = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    const moodTodayFromStorage = moodsFromStorage.filter((mood) => mood.date === dateToday)[0];
    
    if (moodTodayFromStorage) {
      const moodClass = moodTodayFromStorage.mood.toLowerCase();
      setBackColor(moodClass);
    } else if (selectedCard) {
      setBackColor(selectedCard.className);
    } else {
      setBackColor('angry'); // Default color if no mood is selected
    }
  }, [selectedCard, dateToday]);

  return (
    <div className='app'>
      <div className='container'>
        <div className={`app__content ${backColor}-bg`}>      
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
