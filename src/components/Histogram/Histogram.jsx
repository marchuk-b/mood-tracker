import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import './Histogram.css'

export const Histogram = () => {
    const moodsFromStorage = JSON.parse(localStorage.getItem("moodEntries")) || [];
    const cardsData = [
        {id: 1, name: 'Angry', className: 'angry', emoji: require('../../assets/emoji/angry.png'), colorIndicator: '#FF843E'},
        {id: 2, name: 'Upset', className: 'upset', emoji: require('../../assets/emoji/upset.png'), colorIndicator: '#8CA4EE'},
        {id: 3, name: 'Sad', className: 'sad', emoji: require('../../assets/emoji/sad.png'), colorIndicator: '#A1E7EB'},
        {id: 4, name: 'Good', className: 'good', emoji: require('../../assets/emoji/good.png'), colorIndicator: '#FDDD6F'},
        {id: 5, name: 'Happy', className: 'happy', emoji: require('../../assets/emoji/happy.png'), colorIndicator: '#DFEBFF'},
        {id: 6, name: 'Spectacular', className: 'spectacular', emoji: require('../../assets/emoji/spectacular.png'), colorIndicator: '#FFA7BC'},
    ] 

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
    <div className='histogram'>
        <BarChart 
            width={295} 
            height={300} 
            data={numberOfMood()}
            className={`angry`}
        >
            <XAxis 
                dataKey="mood"
                stroke="#754242"
                tick={{ fontSize: 14, fontWeight: 600 }}
                interval={0} // show all labels even if close together
                angle={-25} 
                textAnchor="end"
                height={50} // adds vertical space to avoid cutoff
            />
            <YAxis 
                stroke="#754242"
                tick={{ fontSize: 14, fontWeight: 600 }}
                allowDecimals={false}
                width={20}
            />
            <Bar dataKey="count" fill="#8884d8" barSize={30} />
        </BarChart>
    </div>
  )
}
