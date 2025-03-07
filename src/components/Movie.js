import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, poster, genres }) {
    return (
        <Link to={`/movie/${id}`}
            state={{
                year,
                title,
                poster,
                genres
            }
            }
        >
            <div className="movies">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">{genres.map((genres, index) =>
                        <li key={index} className="genres__genre">{genres}</li>
                    )}</ul>
                </div>
            </div>
        </Link >
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
}

export default Movie;