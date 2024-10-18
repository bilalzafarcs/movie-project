import React from 'react';
import './Header.css';

const Header: React.FC<{ setType: (type: string)  => void ; setCategory: (type: string) => void; setSelectedGenre: (type: number | null)  => void ; } > =
 ({ setType, setCategory, setSelectedGenre }) =>
   {
  return (
    <header className="navbar">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav>
                    <a href="#"><img className="logo" src="src/assets/logo.png"/></a>
                    <div className="dropdown">
                        <a href="#" className="dropbtn">Movies</a>
                        <div className="dropdown-content">
                            <a href="#" onClick={() => {setType('movie'); setSelectedGenre(null); }}>All</a>
                            <a href="#" onClick={() => {setCategory('popular');setType('movie');}}>Popular</a>
                            <a href="#" onClick={() => {setCategory('upcoming');setType('movie');}}>Upcoming</a>
                            <a href="#" onClick={() => {setCategory('now_playing');setType('movie');}}>Now Playing</a>
                            <a href="#" onClick={() => {setCategory('top_rated');setType('movie');}}>Top Rated</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="#" className="dropbtn">TV Shows</a>
                        <div className="dropdown-content">
                            <a href="#" onClick={() => {setType('tv');setSelectedGenre(null);}}>All</a>
                            <a href="#" onClick={() => {setCategory('airing_today');setType('tv');}}>Airing Today</a>
                            <a href="#" onClick={() => {setCategory('on_the_air');setType('tv');}}>On The Air</a>
                            <a href="#" onClick={() => {setCategory('popular');setType('tv');}}>Popular</a>
                            <a href="#" onClick={() => {setCategory('top_rated');setType('tv');}}>Top Rated</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>

  );
};

export default Header;



