import { useEffect, useState} from "react";
import { fetchTrendMovies } from "API/API";
import LoadingIndicator from "components/LoadingIndicator ";
import MovieList from '../components/MovieList';
import { NoCastText } from "components/Cast.styled";

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async() => {
            try {
                setIsLoading(true);
                setIsLoading(true);
                const {results} = await fetchTrendMovies();
                setTrending(results);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingMovies()
    }, [])

    return (
        <>
          {isLoading ? (
            <LoadingIndicator />
          ) : error ? (
            <NoCastText>
              Sorry, we could not fetch the trending movies. Please try again later.
            </NoCastText>
          ) : (
            <MovieList trendingMovies={trendingMovies} />
          )}
        </>
      );
    };

export default Home;