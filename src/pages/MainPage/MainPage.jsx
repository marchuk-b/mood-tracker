import { useContext, useState } from 'react'
import { CardCarousel } from '../../components/CardCarousel/CardCarousel'
import './MainPage.css'
import { MoodContext } from '../../context/MoodContext'

export const MainPage = ({onCardChange}) => {
    const {cardsData, moodCardData, moodToday, noteToday, saveMood, addTextToEntries, noteText, setNoteText} = useContext(MoodContext);
    const [selectedCard, setSelectedCard] = useState(cardsData[0]);

    const getSelectedCard = (card) => {
        setSelectedCard(card)
        onCardChange(card)
    };  

    return (
        <div className='mainpage'>
            {!moodToday && (
                <>
                    <CardCarousel 
                        cardsData={cardsData} 
                        onCardChange={getSelectedCard}
                    />
                    <button className='carousel__btn' onClick={() => saveMood(selectedCard)}>Select mood</button>
                </>
            )}

            {moodToday && moodCardData && (
                <>
                    <div className={`mainpage-moodcard ${cardsData.find(c => c.name === moodToday.mood)?.className}`}>
                        <div className="mainpage-moodcard__title">Your mood today:</div>
                        <div className="mainpage-moodcard__name">{moodToday.mood}</div>
                        <img className='mainpage-moodcard__img' src={cardsData.find(c => c.name === moodToday.mood)?.emoji} alt="" />
                    </div>
                    
                    {!noteToday && (
                        <div className="input-text">
                            <textarea 
                                className='input-text__input' 
                                value={noteText} 
                                onChange={(e) => setNoteText(e.target.value)} 
                                placeholder='Why do you have this mood?'
                            />
                            <button className='carousel__btn' onClick={() => addTextToEntries()}>Add note</button>
                        </div>
                    )}

                    {noteToday && (
                        <div className={`mainpage-moodcard__note ${cardsData.find(c => c.name === moodToday.mood)?.className}`}>
                            <div className="mainpage-moodcard__note-title">Note:</div>
                            <div className="mainpage-moodcard__note-text">{noteToday}</div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
