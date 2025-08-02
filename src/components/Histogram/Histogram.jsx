import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import './Histogram.css'

export const Histogram = ({number, moodCard}) => {

  return (
    <div className={`histogram ${moodCard.className}`}>
        <BarChart 
            width={295} 
            height={300} 
            data={number}
        >
            <XAxis 
                dataKey="mood"
                stroke={moodCard.colorFont}
                tick={{ fontSize: 14, fontWeight: 600 }}
                interval={0} // show all labels even if close together
                angle={-25} 
                textAnchor="end"
                height={50} // adds vertical space to avoid cutoff
            />
            <YAxis 
                stroke={moodCard.colorFont}
                tick={{ fontSize: 14, fontWeight: 600 }}
                allowDecimals={false}
                width={20}
            />
            <Bar dataKey="count" fill={moodCard.colorFont} barSize={30} />
        </BarChart>
    </div>
  )
}
