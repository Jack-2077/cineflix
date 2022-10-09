import React from 'react';
import styled from 'styled-components/macro';

const test = [
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
  {
    Title: 'Dog',
    Year: '2022',
    Released: '18 Feb 2022',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
  },
];

const StyledWrapper = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2em;
`;
const StyledMovieCard = styled.div`
  img {
    border: 5px solid #fff;
    max-width: 100%;
  }

  .movie {
    margin: 0 auto;
    padding: 0 5px;
    max-width: 220px;
    text-align: left;
    letter-spacing: -0.03em;

    &__title {
      margin: 0;
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
  }

  @media (min-width: 992px) {
    img {
      width: 210px;
      height: 315px;
    }

    .movie {
      &__title {
        font-size: 0.95em;
      }
    }
  }
`;
export default function MovieCard() {
  return (
    <StyledWrapper>
      {test.map(({ Title, Year, Poster }, i) => (
        <StyledMovieCard key={i}>
          <img src={Poster} alt={`${Title} Poster`} />
          <div className='movie'>
            <p className='movie__title'>{Title}</p>
            <p className='movie__year'>{Year}</p>
          </div>
        </StyledMovieCard>
      ))}
    </StyledWrapper>
  );
}
