import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainVideoContainer from './MainVideoContainer';
import SecondaryVideoContainer from './SecondaryVideoContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';



const Browse = () => {
  
  // Fetch Data from TDB API and update store can be moved out from this page and can be kept in custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  useUpcomingMovies();
  
  return (
    <div>
        <Header />
        <MainVideoContainer />
        <SecondaryVideoContainer />
        {
          /**
           * MainContainer
           *   - VideoBackground
           *   - Video Title and info
           * 
           * SecondaryContainer
           *   - MoviesList * N
           *   - card * N
           */
        }

        
        
    </div>
  )
}


export default Browse