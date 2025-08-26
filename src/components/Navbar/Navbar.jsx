import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { MoodContext } from '../../context/MoodContext'

export const Navbar = () => {
  const { moodCardData } = useContext(MoodContext);

  return (
    <div className={`navbar ${moodCardData.className}`}>
        <Link className={`navbar__link ${moodCardData.className}`} to={'/'}>
            <i className="fa-solid fa-house"></i>
        </Link>
        <Link className={`navbar__link ${moodCardData.className}`} to={'/statistics'}>
            <i className="fa-solid fa-chart-simple"></i>
        </Link>
        <Link className={`navbar__link ${moodCardData.className}`} to={'/calendar'}>
            <i className="fa-solid fa-calendar"></i>
        </Link>
    </div>
  )
}
