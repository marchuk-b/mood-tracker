import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='navbar__link' to={'/'}>
            <i className="fa-solid fa-house"></i>
        </Link>
        <Link className='navbar__link' to={'/statistics'}>
            <i className="fa-solid fa-chart-simple"></i>
        </Link>
    </div>
  )
}
