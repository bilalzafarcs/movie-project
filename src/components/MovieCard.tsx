import { formatDate } from "../utils/functons";
import { MovieCardProps } from "../utils/interfaces";
import StarRating from "./StarRating";


const MovieCard: React.FC<MovieCardProps> = ({ id, title, release_date, poster_path, overview, rating, background_path }) => {
  return (
    <>
      <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={poster_path} />
          <h2>{title}</h2>
          <h4>{formatDate(release_date)}</h4>
          {/* <span className="minutes">117 min</span> */}
          {/* <p className="type">Action, Crime, Fantasy</p> */}
        </div>
        <div className="movie_desc">
          <p className="text">
          {overview}
          </p>
        </div>
        <div className="movie_social">
          <StarRating rating={rating} id={id} />
        </div>
      </div>
        <div className="blur_back" style={{background: `url(${background_path})`}}>
        </div>
      </div>
      </>
  )
}

export default MovieCard;