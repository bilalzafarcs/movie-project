import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC<{ 
  setType: (type: string) => void; 
  setCategory: (type: string) => void; 
  setSelectedGenre: (type: number | null) => void; 
  setSelectedYear: (type: number | null) => void; 
  setSearchQuery: (type: string) => void; 
  setCurrentPage: (type: number ) => void;
}> = ({ setType, setCategory, setSelectedGenre, setSelectedYear,setSearchQuery,setCurrentPage }) => {
  
  const handleSetFilters = (type: string, category: string = '', resetGenre: boolean = true, resetYear: boolean = true, resetSearch: boolean = true, resetPage: number = 1) => {
    setType(type);
    setCategory(category);
    if (resetGenre) setSelectedGenre(null);
    if (resetYear) setSelectedYear(null);
    if (resetSearch) setSearchQuery('');
    if (resetPage) setCurrentPage(1);
  };

  const navLinks = [
    {
      label: 'Movies',
      type: 'movie',
      links: [
        { label: 'All', path: '/movies/all', category: '' },
        { label: 'Popular', path: '/movies/popular', category: 'popular' },
        { label: 'Upcoming', path: '/movies/upcoming', category: 'upcoming' },
        { label: 'Now Playing', path: '/movies/now-playing', category: 'now_playing' },
        { label: 'Top Rated', path: '/movies/top-rated', category: 'top_rated' }
      ]
    },
    {
      label: 'TV Shows',
      type: 'tv',
      links: [
        { label: 'All', path: '/tv/all', category: '' },
        { label: 'Airing Today', path: '/tv/airing-today', category: 'airing_today' },
        { label: 'On The Air', path: '/tv/on-the-air', category: 'on_the_air' },
        { label: 'Popular', path: '/tv/popular', category: 'popular' },
        { label: 'Top Rated', path: '/tv/top-rated', category: 'top_rated' }
      ]
    }
  ];

  return (
    <header className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <Link to="/"><img className="logo" src="/src/assets/logo.png" alt="Logo"/></Link>
              {navLinks.map((menu) => (
                <div className="dropdown" key={menu.label}>
                  <Link to="#" className="dropbtn">{menu.label}</Link>
                  <div className="dropdown-content">
                    {menu.links.map((link) => (
                      <Link 
                        key={link.label} 
                        to={link.path} 
                        onClick={() => handleSetFilters(menu.type, link.category, true, true, true, 1)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
