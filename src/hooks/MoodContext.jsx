import { createContext, useEffect, useState } from "react";

const MoodContext = createContext(null);

function MoodProvider({ children }) {
    const cardsData = [
        {id: 1, name: 'Angry', className: 'angry', emoji: require('../assets/emoji/angry.png'), colorIndicator: '#FF843E'},
        {id: 2, name: 'Upset', className: 'upset', emoji: require('../assets/emoji/upset.png'), colorIndicator: '#8CA4EE'},
        {id: 3, name: 'Sad', className: 'sad', emoji: require('../assets/emoji/sad.png'), colorIndicator: '#A1E7EB'},
        {id: 4, name: 'Good', className: 'good', emoji: require('../assets/emoji/good.png'), colorIndicator: '#FDDD6F'},
        {id: 5, name: 'Happy', className: 'happy', emoji: require('../assets/emoji/happy.png'), colorIndicator: '#DFEBFF'},
        {id: 6, name: 'Spectacular', className: 'spectacular', emoji: require('../assets/emoji/spectacular.png'), colorIndicator: '#FFA7BC'},
    ]; 

    const [moodToday, setMoodToday] = useState(null);
    const moodsFromStorage = JSON.parse(localStorage.getItem("moodEntries")) || [];
    const dateToday = new Date().toISOString().split("T")[0]; 
    const [noteText, setNoteText] = useState('');
    const [noteToday, setNoteToday] = useState(null);
    // const moodCardData = moodToday ? cardsData.find(c => c.name === moodToday.mood) : null;

    useEffect(() => {
        const moodTodayFromStorage = moodsFromStorage.filter((mood) => mood.date === dateToday)[0];

        if (moodTodayFromStorage) {
            setMoodToday(moodTodayFromStorage);
            setNoteToday(moodTodayFromStorage.note)
        };
    }, [dateToday])

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
            setNoteToday(noteText);
            setNoteText('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <MoodContext.Provider value={{ 
            moodToday, noteToday, dateToday, cardsData, 
            moodsFromStorage, saveMood, addTextToEntries, noteText, setNoteText 
        }}>
            {children}
        </MoodContext.Provider>
    );
}

export { MoodContext, MoodProvider };
