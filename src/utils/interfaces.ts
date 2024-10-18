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
