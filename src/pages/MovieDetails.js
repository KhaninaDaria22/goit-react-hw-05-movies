import { fetchMovieById } from '../services/api';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, } from 'react-router-dom';
import {LoadingIndicator} from '../components/LoadingIndicator';
import { Button, Container, StyledLink } from '../components/MovieDetails.styled';
import MovieCard from 'components/MovieCard';

const MovieDetails = () => {
    const {moviId} = useParams();
    const location = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});

useEffect(() => {
    const fetchSelectedMovie = async moviId => {
        try {
            const movieData = await fetchMovieById (moviId);
            setSelectedMovie(movieData);
        } catch (error) {
            console.log(error);
        }
    };

    fetchSelectedMovie(moviId)
}, [moviId]);

return (
    <main>
      <Container>
        <StyledLink to={location?.state?.from ?? '/'}>
          <Button type="button">
            Go back
          </Button>
        </StyledLink>

        <MovieCard movie={selectedMovie} />

        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
}

export default MovieDetails;