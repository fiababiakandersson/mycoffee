import './Navbar.css';

function Navbar() {
  
    return (
        <section className='section search'>
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