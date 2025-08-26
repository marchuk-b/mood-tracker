import { useContext } from 'react';
import { Histogram } from '../../components/Histogram/Histogram'
import './StatisticsPage.css'
import { MoodContext } from '../../context/MoodContext';

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
    <div className='page stats-page'>
        <div className="page__item">
            <div className={`page__title ${moodCardData.className}`}>Histogram</div>
            <Histogram number={numberOfMood()} moodCard={moodCardData ? moodCardData : cardsData[0]} />
        </div>
    </div>
  )
}
