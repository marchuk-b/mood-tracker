import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './pages/MainPage/MainPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';

function App() {
  return (
    <div className="app">
      <div className='container'>
        {/* <header className='header'>
          <a href='/' className='header__link'>Mood Tracker</a>
        </header> */}
    
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/statistics' element={<StatisticsPage />} />
            <Route path='*' element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        <footer className='footer'>
          <Navbar />
        </footer>
      </div>
    </div>
  );
}

export default App;
