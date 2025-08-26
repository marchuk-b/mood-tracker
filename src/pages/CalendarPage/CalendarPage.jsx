import "./CalendarPage.css"
import { MoodCalendar } from '../../components/MoodCalendar/MoodCalendar';
import { useContext } from "react";
import { MoodContext } from "../../context/MoodContext";

export const CalendarPage = () => {
    const { moodCardData, cardsData } = useContext(MoodContext);
    return (
        <div className="page calendar-page">
            <div className="page__item">
                <div className={`page__title ${moodCardData.className}`}>Calendar</div>
                <MoodCalendar moodCard={moodCardData ? moodCardData : cardsData[0]} />
            </div>
        </div>
    )
}

