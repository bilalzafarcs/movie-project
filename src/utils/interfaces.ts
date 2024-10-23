export interface Genre {
    id: number;
    name: string;
}

export interface GenreTypeProps {
    type: string;
}
  
export interface MovieCardProps {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    background_path: string;
    overview: string;
    rating: number;
}

export interface PaginationProp {
  totalPages: number;
  current_page: number;
  onPageChange: (page: number) => void;
}

export interface LanguageProp {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
    languages: Array<{ iso_639_1: string; english_name: string }>;
}

export interface GenresProps{
    type: string;
    genres: any[];
    setSelectedGenre: (genreId: number) => void;
    selectedGenre: number | null;
    setCurrentPage: (page: number) => void;
    setGenreName: (name: string) => void; 
}

export interface HeaderProps{
    setType: (type: string) => void; 
    setCategory: (type: string) => void; 
    setSelectedGenre: (type: number | null) => void; 
    setSelectedYear: (type: number | null) => void; 
    setSearchQuery: (type: string) => void; 
    setCurrentPage: (type: number ) => void;
}