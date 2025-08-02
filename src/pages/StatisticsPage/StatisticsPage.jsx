import { useContext } from 'react';
import { Histogram } from '../../components/Histogram/Histogram'
import './StatisticsPage.css'
import { MoodContext } from '../../context/MoodContext';
import { MoodCalendar } from '../../components/MoodCalendar/MoodCalendar';

export const StatisticsPage = () => {
  const { moodsFromStorage, cardsData, moodCardData } = useContext(MoodContext);

  const numberOfMood = () => {
      const number = []
      for (let card of cardsData) {
          const selectedMoods = moodsFromStorage.filter((moodEntry) => {
              return moodEntry.mood === card.name
          })
          
          const countMood = {
              mood: card.name,
              count: selectedMoods.length
          }
          number.push(countMood)
      }
      return number
  }

  return (
    <div className='statspage'>
        <div className="statspage__item">
            <div className={`statspage__title ${moodCardData.className}`}>Histogram</div>
            <Histogram number={numberOfMood()} moodCard={moodCardData ? moodCardData : cardsData[0]} />
        </div>
        <div className="statspage__item">
            <div className={`statspage__title ${moodCardData.className}`}>Calendar</div>
            <MoodCalendar moodCard={moodCardData ? moodCardData : cardsData[0]} />
        </div>
    </div>
  )
}
