import { useState } from 'react';
import { Card } from '../Card/Card'
import './CardCarousel.css'

export const CardCarousel = ({cardsData}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeElement, setActiveElement] = useState(cardsData[slideIndex]);

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
        <button className='carousel__btn'>Select mood</button>
      </div>
    </div>
  )
}
