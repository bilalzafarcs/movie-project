import config from './config';

export const fetchData = async (category: string, type: string, currentPage: number, genreId?: number, selectedLanguage?: string) => {
  const genreQuery = genreId ? `&with_genres=${genreId}` : '';
  const categoryQuery = category === ''
    ? `discover/${type}` 
    : `${type}`+'/'+`${category}`; 
  const langQuery = selectedLanguage ? `&with_original_language=${selectedLanguage}` : '';
    const response = await fetch(`${config.API_URL}${categoryQuery}?api_key=${config.API_KEY}&page=${currentPage}${genreQuery}${langQuery}`);
    // const response = await fetch(`${config.API_URL}${categoryQuery}?api_key=${config.API_KEY}&page=${currentPage}${genreQuery}&with_origin_country=IN`);
    const data = await response.json();
    return data.results || [];
};

export const fetchGenres = async (type: string) => {
  const response = await fetch(`${config.API_URL}genre/${type}/list?language=en&api_key=${config.API_KEY}`);
  const data = await response.json();
  return data.genres || []; 
};

export const fetchLangs = async () => {
  const response = await fetch(`${config.API_URL}configuration/languages?api_key=${config.API_KEY}`);
  const data = await response.json();
  return data || []; 
};
