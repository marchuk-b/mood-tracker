import "./CalendarPage.css"
import { MoodCalendar } from '../../components/MoodCalendar/MoodCalendar';
import { useContext, useState } from "react";
import { MoodContext } from "../../context/MoodContext";
import { MoodList } from "../../components/MoodList/MoodList";

export const CalendarPage = () => {
    const { moodCardData, cardsData } = useContext(MoodContext);
    const [activeMonth, setActiveMonth] = useState(new Date());

    const handleMonthChange = ({ activeStartDate }) => {
        setActiveMonth(activeStartDate);
    };

    return (
        <div className="page calendar-page">
            <div className="page__item">
                <div className={`page__title ${moodCardData.className}`}>Calendar</div>
                <MoodCalendar moodCard={moodCardData ? moodCardData : cardsData[0]} onChangeMonth={handleMonthChange} />
            </div>
            <div className="page__item">
                <MoodList month={activeMonth} />
            </div>
        </div>
    )
}

