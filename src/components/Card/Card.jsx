import './Card.css'

export const Card = ({data}) => {
    if(!data) {
        return (
            <div> Card unavailable </div>
        )
    }

  return (
    <div className={`card ${data.className}`}>
        <div className="card__text">How are you feeling today?</div>
        <div className="card-emotion">
            <div className="card-emotion__name">{data.name}</div>
            <img className="card-emotion__emoji" src={data.emoji} alt='' />
        </div>
    </div>
  )
}
