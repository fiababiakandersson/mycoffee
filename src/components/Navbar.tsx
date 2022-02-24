import { Link } from 'react-router-dom';
import Logo from '../assets/Coffeebean.png';
import './Navbar.css';

function Navbar() {
  
    return (
      
        <section className='section search'>
          <div className='coffeebean-logo'>
            <Link to='/'>
            <img src={Logo} alt='mycoffee logo' className='logo'/>
            </Link>
        </div>
        <form className='search-form'>
          <div className='form'>
            <label htmlFor='name'>What do you feel like today?</label>
            <input
              type='text'
              name='name'
              id='name'
            />
          <div className='filter-name'><p>Espresso | Drip brew | French press</p></div>
          </div>
        </form>
        
      </section>
     
    )
}

export default Navbar;