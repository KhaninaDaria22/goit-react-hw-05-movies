import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../API/API';
import {
  CastHeader,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  CastImg,
  NoCastText,
  Wrapper,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Wrapper>
      <CastHeader>Cast</CastHeader>

      {cast.length ? (
        <CastList>
          {cast.map(actor => (
            <CastListItem className="cast-card" key={actor.id}>
              {actor.profile_path ? (
                <CastImg
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <CastImg
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

              <CastInfo>
                <CastName>{actor.name}</CastName>
                <p>Character: {actor.character}</p>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      ) : (
        <NoCastText>
          We don't have any information about the cast yet.
        </NoCastText>
      )}
    </Wrapper>
  );
};

export default Cast;