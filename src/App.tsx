import { useState } from 'react';
import './App.scss';
import { IMovie } from './models/Movie';
import SearchSection from './components/SearchSection/SearchSection';
import MoviesSection from './components/MoviesSection/MoviesSection';
import MainContext from './contexts/MainContext';
import useDidMountEffect from './hooks/useDidMountEffect';
import { getAPIError } from './api/utils/methods';
import MoviesAPI from './api/movies';

const App: React.VFC = () => {

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(false);
  
  const resetValues = (offset?: number) : void => {
    setIsLoading(true);
    setError("");
    setMovies([]);
    if(offset === undefined){
      setPage(0);
    }
  }

  // Update search results based on the keyword and api key inputs
  const searchMovies = async (query: string, apiKey: string, offset?: number) : Promise<void> => {
    resetValues(offset);
    const { data, errorStatus } = await MoviesAPI.getMovieReviews(apiKey, {query, offset}, () => setIsLoading(false));
    if(errorStatus){
      const _error = getAPIError(errorStatus);
      setError(_error);
      return;
    }
    const {results, num_results, has_more} = data;
    setMovies(results);
    setTotalResults(num_results);
    setHasMore(has_more);
  }

  useDidMountEffect(() => { //run on each update of page (not on mount)
    searchMovies(search, apiKey, page);
  }, [page])

  
  const result = () : JSX.Element | null => {
    if(totalResults || isLoading){
      return <MoviesSection movies={movies} hasMore={hasMore} isLoading={isLoading} />;
    }
    else if(totalResults === 0){
      return <div className="no-results-wrapper flex f-justify-center f-align-center">No Results</div>
    }
    return null;
  }

  return (
    <MainContext.Provider value={{search, apiKey, page, setSearch, setApiKey, setPage}}>
      <main>
        <div className="wrapper-filter">
          <SearchSection onSearch={(keyword, apiKey) => searchMovies(keyword, apiKey)} totalResults={totalResults} error={error} />
        </div>
        <div className="flex f-justify-center">
          {result()}
        </div>
      </main>
    </MainContext.Provider>
  );
}

export default App;
