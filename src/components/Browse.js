import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainVideoContainer from './MainVideoContainer';
import SecondaryVideoContainer from './SecondaryVideoContainer';


const Browse = () => {
  
  // Fetch Data from TDB API and update store can be moved out from this page and can be kept in custom hook
  useNowPlayingMovies();
  
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