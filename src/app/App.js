import styled from 'styled-components/macro';
import debounce from 'lodash.debounce';
import GlobalStyles from './GlobalStyles';
import { SearchBar, MovieCard } from '../components';
import { useMemo, useState } from 'react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  gap: 5em;
  align-items: center;
  background-color: #121212;

  h1 {
    margin-left: 1.5em;
    font-size: 2.66rem;
    color: #ffff;
  }

  @media (max-width: 930px) {
    gap: 1.5em;

    h1 {
      margin-left: 0.2em;
    }
  }
`;

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieInfo = async (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const moviesList = data.Search;
        if (moviesList) {
          setMovies(moviesList);
        }
      });
  };
  const inputChangeHandler = (e) => {
    const title = e.target.value;
    if (title) {
      const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&type=Movie`;
      fetchMovieInfo(url);
    } else {
      setMovies([]);
    }
  };

  const debouncedInputChangeHandler = useMemo(
    () => debounce(inputChangeHandler, 300),
    []
  );

  return (
    <>
      <GlobalStyles />
      <StyledHeader>
        <h1>CineFlix</h1>
        <SearchBar handleInputChange={debouncedInputChangeHandler} />
      </StyledHeader>
      <MovieCard movies={movies} />
    </>
  );
}

export default App;
