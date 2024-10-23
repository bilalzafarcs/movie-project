import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Genres: React.FC<{
  type: string;
  genres: any[];
  setSelectedGenre: (genreId: number) => void;
  selectedGenre: number | null;
  setCurrentPage: (page: number) => void;
  setGenreName: (name: string) => void; 
}> = ({ type, genres, setSelectedGenre, selectedGenre, setCurrentPage, setGenreName }) => {

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
