import './App.css';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import Paginations from './components/Paginations';
import Genres from './components/Genres';
import { useEffect, useState } from 'react';
import { fetchData, fetchGenres, fetchLangs, fetchSearchQuery } from './utils/apiservice'; 
import config from './utils/config';
import useCustomState from './utils/useCustomState';
import Languages from './components/Languages';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App: React.FC = () => {
 
  const {
    movies,
    setMovies,
    type,
    setType,
    category,
    totalPages,
    currentPage,
    setCurrentPage,
    loading,
    setLoading,
    selectedGenre,
    genres,
    setGenres,
    setSelectedGenre,
    setCategory,
    languages,
    setlanguages,
    selectedLanguage,
    setSelectedLanguage,
    selectedYear,
    setSelectedYear,
    searchQuery,
    setSearchQuery,
    genereName,
    setGenreName
  } = useCustomState();

  const loadData = async () => { 
    setLoading(true);
    try {
      const data = await fetchData(category, type, currentPage, selectedGenre ?? undefined, selectedLanguage, selectedYear ?? undefined);
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadGenres = async () => {
    try {
      const genreData = await fetchGenres(type);
      setGenres(genreData); 
    } catch (error) {
      console.error('Error loading genres:', error);
    } 
  };

  const loadLanguages = async () => {
    try {
      const langData = await fetchLangs();
      setlanguages(langData); 
    } catch (error) {
      console.error('Error loading languages:', error);
    } 
  };

  const loadSearchResult = async () => {
    try {
      const searchData = await fetchSearchQuery(searchQuery,type,currentPage,selectedYear ?? undefined);
      setMovies(searchData); 
    } catch (error) {
      console.error('Error loading searchData:', error);
    } 
  };


  useEffect(() => {
    setLoading(true)
    setSelectedGenre(null);
    setCurrentPage(1);
    setSelectedYear(null);
  }, [type]);


  useEffect(() => {
    setCategory('');
  }, [selectedGenre]);

  useEffect(() => {
    loadLanguages();
  }, []);

  
  useEffect(() => {
    if(searchQuery){
      loadSearchResult();
    }else{
      const loadloadData = setTimeout(() => {
        loadData();
      }, 300);
      return () => clearTimeout(loadloadData); 
    }
  }, [type, currentPage, selectedGenre, category, selectedLanguage, selectedYear]);


  useEffect(() => {
    const loadGenresDebounced = setTimeout(() => {
      loadGenres();
    }, 600);
    return () => clearTimeout(loadGenresDebounced); 
  }, [type]);

  

  const handleYearChange = (date: Date | null) => {
    if (date) {
      const year = date.getFullYear();
      setSelectedYear(year);
    } else {
      setSelectedYear(null);
    }
  };

  const handleSearch = () => {
    loadSearchResult();
  };



  if (loading) return <>
                <div className="loading-state">
                <img src="/src/assets/logo.png"/>
                <div className="loader"></div>
                </div></>;

  return (
    <>
      <Header setType={setType} setCategory={setCategory} setSelectedGenre={setSelectedGenre} setSelectedYear={setSelectedYear} setSearchQuery={setSearchQuery} 
      setCurrentPage={setCurrentPage}/>
      <section className='mt-5 mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Genres type={type} genres={genres} setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre} setCurrentPage={setCurrentPage} 
              setGenreName={setGenreName}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <Languages
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languages={languages}
                  />
                </div>
                <div className="col-md-4">
                  <DatePicker
                    selected={selectedYear ? new Date(selectedYear, 0, 1) : null} 
                    onChange={handleYearChange}
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Select Year"
                  />
                </div>
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control search-form" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <div className="input-group-append">
                      <button className="btn btn-search" type="button" onClick={handleSearch}>Submit</button>
                    </div>
                  </div>
                </div>
              <div className="col-md-12">
                {searchQuery && (
                  <h2 className="serach-heading">Results for Search: {searchQuery} </h2>
                )}
              </div>
              <div className="col-md-12" >
                {movies.map((movie) => (
                    <MovieCard 
                      key={movie.id} 
                      id={movie.id}
                      title={type === 'tv' ? movie.name : movie.title}
                      release_date={type === 'tv' ? movie.first_air_date : movie.release_date}
                      overview={movie.overview}
                      rating={movie.vote_average}
                      poster_path={`${config.POSTER_PATH}${movie.poster_path}`} 
                      background_path = {`${config.POSTER_PATH}${movie.backdrop_path}`} 
                    />
                ))}
                  </div>
                  {movies.length > 0 && (
                      <Paginations
                        totalPages={totalPages}
                        current_page={currentPage}
                        onPageChange={setCurrentPage} 
                      />
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
