import { Card } from '../Card/Card'
import './CardList.css'

export const CardList = ({cardsData}) => {

    if(!cardsData || cardsData.length === 0) {
        return (
            <div> Cards unavailable </div>
        )
    }


  return (
    <div className="cardlist">
        <Card data={cardsData[0]} />
        <Card data={cardsData[1]} />
        <Card data={cardsData[2]} />
        <Card data={cardsData[3]} />
        <Card data={cardsData[4]} />
        <Card data={cardsData[5]} />
    </div>
  )
}
