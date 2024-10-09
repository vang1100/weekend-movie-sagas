import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieList.css';

function MovieList() {

  const history = useHistory();

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const onClick = (events) => {
   // alert('go to details!');
   console.log('what is the id?', events);

   const movieId = events.currentTarget.id; // this targets the id
   console.log('what  ID is the movieId targeting', movieId);
    history.push(`/details/${movieId}`);
  }

  //*****//
  // 1. how do I click one image and then have it take me to the correct ID details?

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div data-testid='movieItem' key={movie.id} id={movie.id} onClick={onClick}>
              {/* doing the onclick on the div gives us access to information
              we also pass it with a id={movie.id} */}
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
