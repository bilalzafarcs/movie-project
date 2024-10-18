import './App.css';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import Paginations from './components/Paginations';
import Genres from './components/Genres';
import { useEffect } from 'react';
import { fetchData, fetchGenres, fetchLangs } from './utils/apiservice'; 
import config from './utils/config';
import useCustomState from './utils/useCustomState';
import Languages from './components/Languages';

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
    setSelectedLanguage
  } = useCustomState();

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchData(category, type, currentPage, selectedGenre ?? undefined, selectedLanguage);
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


  useEffect(() => {
    setLoading(true)
    setSelectedGenre(null);
    setCurrentPage(1);
  }, [type]);


  useEffect(() => {
    setCategory('');
  }, [selectedGenre]);

  useEffect(() => {
    loadLanguages();
  }, []);

  
  useEffect(() => {
    const loadloadData = setTimeout(() => {
      loadData();
    }, 300);
    return () => clearTimeout(loadloadData); 
  }, [type, currentPage, selectedGenre, category, selectedLanguage]);


  useEffect(() => {
    const loadGenresDebounced = setTimeout(() => {
      loadGenres();
    }, 600);
    return () => clearTimeout(loadGenresDebounced); 
  }, [type]);



  if (loading) return <>
                <div className="loading-state">
                <img src="/src/assets/logo.png"/>
                <div className="loader"></div>
                </div></>;

  return (
    <>
      <Header setType={setType} setCategory={setCategory} setSelectedGenre={setSelectedGenre}/>
      <section className='mt-5 mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Genres type={type} genres={genres} setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre} setCurrentPage={setCurrentPage} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <Languages
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languages={languages}
                  />
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
