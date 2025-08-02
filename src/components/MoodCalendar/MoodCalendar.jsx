import Calendar from "react-calendar"
import "./MoodCalendar.css"
import { useContext } from "react";
import { MoodContext } from "../../context/MoodContext";

export const MoodCalendar = ({moodCard}) => {
  const { moodsFromStorage, cardsData } = useContext(MoodContext);

  const getMoodClassForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];

    const moodEntry = moodsFromStorage.find((entry) => entry.date === dateStr);
    if (!moodEntry) return null;

    const moodClass = cardsData.find((card) => card.name === moodEntry.mood)?.className;
    return moodClass || null;
  };

  return (
    <div className={`mood-calendar ${moodCard.className}`}>
      <Calendar
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const moodClass = getMoodClassForDate(date);
            return moodClass ? `${moodClass}-cal` : null;
          }
      }}
    />
    </div>
  )
}
