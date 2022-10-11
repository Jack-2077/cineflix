import React from 'react';
import styled from 'styled-components/macro';

const StyledWrapper = styled.section`
  padding: 0.5em 0.85em;
  width: 100%;

  & > div {
    padding: 1.5em 0 0 4em;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2em;
  }

  @media (max-width: 690px) {
    & > div {
      padding-left: 10vw;
    }
  }
`;

const StyledMovieCard = styled.div`
  img {
    width: 172px;
    height: 265px;
    border: 5px solid #fff;
    max-width: 100%;
  }

  .movie {
    margin: 0 auto;
    padding: 0 5px;
    max-width: 200px;
    text-align: left;
    letter-spacing: -0.03em;

    &__title {
      margin-bottom: 0;
      color: #fff;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__year {
      margin-top: 0;
      font-size: 0.85em;
      color: #919191;
    }

    button {
      background: #6ac045;
      font-weight: bold;
      color: #fff;
    }

    button:hover {
      opacity: 0.9;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 224px;
      height: 334px;
    }

    .movie__title {
      font-size: 0.95em;
    }
  }

  @media (max-width: 690px) {
    img {
      width: 141px;
      height: 206px;
    }

    .movie {
      margin: 0;
      max-width: 120px;
      padding: 0;
    }
  }
`;
export default function MovieCard({ movies }) {
  return (
    <StyledWrapper>
      <div>
        {movies.map((movie, i) => {
          const imageSrc =
            movie?.Poster === 'N/A'
              ? require('../assets/noposter.jpg')
              : movie?.Poster;
          return (
            <StyledMovieCard key={i}>
              <img src={imageSrc} alt='Poster' title={movie?.Title} />
              <div className='movie'>
                <p className='movie__title'>{movie?.Title}</p>
                <p className='movie__year'>{movie?.Year}</p>
                <button>Add</button>
              </div>
            </StyledMovieCard>
          );
        })}
      </div>
    </StyledWrapper>
  );
}
