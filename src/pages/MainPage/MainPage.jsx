import { CardCarousel } from '../../components/CardCarousel/CardCarousel'
import './MainPage.css'

export const MainPage = () => {
    const cardsData = [
        {id: 1, name: 'Angry', className: 'angry', emoji: require('../../assets/emoji/angry.png'), colorIndicator: '#FF843E'},
        {id: 2, name: 'Upset', className: 'upset', emoji: require('../../assets/emoji/upset.png'), colorIndicator: '#8CA4EE'},
        {id: 3, name: 'Sad', className: 'sad', emoji: require('../../assets/emoji/sad.png'), colorIndicator: '#A1E7EB'},
        {id: 4, name: 'Good', className: 'good', emoji: require('../../assets/emoji/good.png'), colorIndicator: '#FDDD6F'},
        {id: 5, name: 'Happy', className: 'happy', emoji: require('../../assets/emoji/happy.png'), colorIndicator: '#DFEBFF'},
        {id: 6, name: 'Spectacular', className: 'spectacular', emoji: require('../../assets/emoji/spectacular.png'), colorIndicator: '#FFA7BC'},
    ] 

    return (
        <div className='mainpage'>
            <CardCarousel  cardsData={cardsData}/>
        </div>
    )
}
