import { useState } from 'react';
import { Card } from '../Card/Card'
import './CardCarousel.css'

export const CardCarousel = ({cardsData}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeElement, setActiveElement] = useState(cardsData[slideIndex]);

  const saveMood = (selectedCard) => {
    try {
      const moodsFromStorage = JSON.parse(localStorage.getItem("moodEntries")) || []; 
      const dateToday = new Date().toISOString().split("T")[0];

      const existingMoodToday = moodsFromStorage.filter((mood) => {
        return mood.date === dateToday;
      })

      if (existingMoodToday.length !== 0) {
        return alert("Today you already choosed your mood");
      }

      const selectedMood = {
        mood: selectedCard.name,
        note: '',
        date: dateToday,
      };

      moodsFromStorage.push(selectedMood);
      localStorage.setItem("moodEntries", JSON.stringify(moodsFromStorage));
      alert("Mood saved successfully!")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`carousel ${activeElement.className || ''}`}>
      <div className="container">
        <div className="carousel__slides">
          {cardsData.map((card, index) => {
            return (
              <div 
                className={`carousel__item ${slideIndex === index ? 'active' : ''}`}
                key={card.id} 
              >
                <Card data={card}/>
              </div>)
            })}
        </div>
        <div className="carousel__pagination">
          {cardsData.map((card, index) => (
            <div 
              key={card.id} 
              className={`carousel__pagination-item ${slideIndex === index ? 'active' : ''}`}
              onClick={() => {
                setSlideIndex(index)
                setActiveElement(card)}}
              style={{background: `${card.colorIndicator}`}}
            >
            </div>
          ))}
        </div>
        <button className='carousel__btn' onClick={() => saveMood(activeElement)}>Select mood</button>
      </div>
    </div>
  )
}
