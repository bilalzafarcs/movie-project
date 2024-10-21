import { useState } from 'react'
import { Genre } from './interfaces';

const useCustomState = () => {
    
  const [movies, setMovies] = useState<any[]>([]);
  const [type, setType] = useState<string>('movie');
  const [category, setCategory] = useState<string>('');
  const [totalPages] = useState<number>(500);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genres, setGenres] = useState<Genre[]>([]); 
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [languages, setlanguages] = useState<any[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  return {
    movies,setMovies,type,setType,category,setCategory,totalPages,currentPage,setCurrentPage,loading,setLoading,
    genres,setGenres,selectedGenre,setSelectedGenre,languages,setlanguages,selectedLanguage,setSelectedLanguage,selectedYear,setSelectedYear
  }
}

export default useCustomState