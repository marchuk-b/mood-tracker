import { useEffect, useState } from 'react'
import { CardCarousel } from '../../components/CardCarousel/CardCarousel'
import './MainPage.css'

export const MainPage = () => {
    const cardsData = [
        {id: 1, name: 'Angry', className: 'angry', emoji: require('../../assets/emoji/angry.png'), colorIndicator: '#FF843E'},
        {id: 2, name: 'Upset', className: 'upset', emoji: require('../../assets/emoji/upset.png'), colorIndicator: '#8CA4EE'},
        {id: 3, name: 'Sad', className: 'sad', emoji: require('../../assets/emoji/sad.png'), colorIndicator: '#A1E7EB'},
        {id: 4, name: 'Good', className: 'good', emoji: require('../../assets/emoji/good.png'), colorIndicator: '#FDDD6F'},
        {id: 5, name: 'Happy', className: 'happy', emoji: require('../../assets/emoji/happy.png'), colorIndicator: '#DFEBFF'},
        {id: 6, name: 'Spectacular', className: 'spectacular', emoji: require('../../assets/emoji/spectacular.png'), colorIndicator: '#FFA7BC'},
    ] 
    const [selectedCard, setSelectedCard] = useState(cardsData[0]);
    const [noteText, setNoteText] = useState('');
    const [moodToday, setMoodToday] = useState(null);

    const moodsFromStorage = JSON.parse(localStorage.getItem("moodEntries")) || [];
    const dateToday = new Date().toISOString().split("T")[0]; 
    const moodCardData = moodToday ? cardsData.find(c => c.name === moodToday.mood) : null;

    useEffect(() => {
        const moodsFromStorage = JSON.parse(localStorage.getItem("moodEntries")) || []; 
        const dateToday = new Date().toISOString().split("T")[0];

        const moodTodayFromStorage = moodsFromStorage.filter((mood) => mood.date === dateToday)[0];

        if (moodTodayFromStorage) setMoodToday(moodTodayFromStorage);
    }, [])

    useEffect(() => {
        if (moodToday?.note) {
            setNoteText(moodToday.note);
        }
    }, [moodToday]);


    const getSelectedCard = (card) => {
        setSelectedCard(card)
    };

    const saveMood = (selectedCard) => {
        try {
          const existingMoodToday = moodsFromStorage.filter((mood) => {
            return mood.date === dateToday;
          });
    
          if (existingMoodToday.length !== 0) {
            return alert("Today you already choosed your mood");
          };
    
          const selectedMood = {
            mood: selectedCard.name,
            note: noteText,
            date: dateToday,
          };
    
          moodsFromStorage.push(selectedMood);
          localStorage.setItem("moodEntries", JSON.stringify(moodsFromStorage));
          alert("Mood saved successfully!");
          setMoodToday(selectedMood);
        } catch (error) {
          console.error(error);
        }
    }    

    const addTextToEntries = () => {
        try {
            const updatedMoods = moodsFromStorage.map((moodEntry) => {
                if (moodEntry.date === dateToday) {
                    return {
                        ...moodEntry,
                        note: noteText 
                    };
                };
                return moodEntry;
            })
            localStorage.setItem("moodEntries", JSON.stringify(updatedMoods));
            alert("Note saved successfully!");
            setNoteText('');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className={`mainpage ${moodCardData ? moodCardData?.className : selectedCard?.className}`}>
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
                    <div className="input-text">
                        <textarea 
                            className='input-text__input' 
                            value={noteText} 
                            onChange={(e) => setNoteText(e.target.value)} 
                            placeholder='Why do you have this mood?'
                        />
                        <button className='carousel__btn' onClick={() => addTextToEntries()}>Add note</button>
                    </div>
                </>
            )}
        </div>
    )
}
