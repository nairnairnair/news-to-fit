import './Header.css'

function Header(props) {

    const setSection = (section) => {
        props.setSection(section)
    }

    return (
        <header className="Header">
            <h1>ALL THE PRINT THAT'S NEWS TO FIT</h1>
            <h2>A New York Times API-based NewsReader</h2>
            <section className="navSection">
                <nav className="navButtons">
                    <button className="navButton" onClick={() => setSection('us')}>U.S.</button>
                    <button className="navButton" onClick={() => setSection('world')}>WORLD</button>
                    <button className="navButton" onClick={() => setSection('nyregion')}>NEW YORK</button>
                    <button className="navButton" onClick={() => setSection('business')}>BUSINESS</button>
                    <button className="navButton" onClick={() => setSection('opinion')}>OPINION</button>
                    <button className="navButton" onClick={() => setSection('sports')}>SPORTS</button>
                    <button className="navButton" onClick={() => setSection('arts')}>ARTS</button>
                    <button className="navButton" onClick={() => setSection('books')}>BOOKS</button>
                    <button className="navButton" onClick={() => setSection('fashion')}>STYLE</button>
                    <button className="navButton" onClick={() => setSection('food')}>FOOD</button>
                    <button className="navButton" onClick={() => setSection('technology')}>TECHNOLOGY</button>
                </nav>
            </section>
        </header>
    );
  }
  
  export default Header;