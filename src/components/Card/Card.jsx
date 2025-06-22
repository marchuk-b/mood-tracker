import './Card.css'
import angry from'../../assets/emoji/angry.png'

export const Card = () => {
  return (
    <div className="card angry">
        <div className="card__text">How are you feeling today?</div>
        <div className="card-emotion">
            <div className="card-emotion__name">Angry</div>
            <img className="card-emotion__emoji" src={angry} />
        </div>
    </div>
  )
}
