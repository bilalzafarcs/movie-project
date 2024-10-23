import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GenresProps } from '../utils/interfaces';

const Genres: React.FC<GenresProps> = ({ type, genres, setSelectedGenre, selectedGenre, setCurrentPage, setGenreName }) => {

  if (!genres.length) return <div>No genres found</div>;

  const handleGenreClick = (genre: any) => {
    setSelectedGenre(genre.id);
    setCurrentPage(1); 
    setGenreName(genre.name);  
  };


  return (
    <div className="genres-div">
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary bg-black text-white text-capitalize">
          {type} Genres List
        </div>
        {genres.map((genre) => (
           <Link 
           key={genre.id}
           to={`/${type}/${genre.name.toLowerCase().replace(/\s+/g, '-')}`}
           onClick={() => handleGenreClick(genre)} 
           className={`list-group-item list-group-item-action ${selectedGenre === genre.id ? 'active' : ''}`}
         >
           {genre.name}
         </Link>
        //   <button
        //     key={genre.id}
        //     className={`list-group-item list-group-item-action ${selectedGenre === genre.id ? 'active' : ''}`}
        //     onClick={() => handleGenreClick(genre.id)}
        //     aria-selected={selectedGenre === genre.id}
        //   >
        //     {genre.name}
        //   </button>
        ))}
      </div>
    </div>
  );
};

export default Genres;
