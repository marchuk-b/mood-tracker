import { useContext } from "react"
import "./MoodList.css"
import { MoodContext } from "../../context/MoodContext"

export const MoodList = ({month}) => {
    const {moodsFromStorage, moodToday} = useContext(MoodContext);

    const filteredMoods = moodsFromStorage.filter((moodItem) => {
        if (!moodItem.date) return false;

        const itemDate = new Date(moodItem.date); // parse string into Date
        return (
            itemDate.getMonth() === month.getMonth() && // same month
            itemDate.getFullYear() === month.getFullYear() // same year
        );
    });

    return (
        <div className="moodlist">
            {filteredMoods.length === 0 ? 
                (<div className={`moodlist__no-items ${moodToday.mood.toLowerCase()}`}>
                    You don't have any notes in this month.
                </div>) 
            : 
                (filteredMoods.map((moodItem, index) => (
                    <div key={index} className={`moodlist__item ${moodItem.mood.toLowerCase()}`}>
                        <div className="moodlist__date"><b>Date:</b> {moodItem.date}</div>
                        <div className="moodlist__mood"><b>Mood:</b> {moodItem.mood}</div>
                        <div className="moodlist__note"><b>Notes:</b> <br />
                            {moodItem.note}
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
