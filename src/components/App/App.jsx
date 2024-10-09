import { Route, HashRouter as Router, Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      
      
      
      <Router>   
      {/* <Link to="/details">Details Page</Link>      */}
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details/:id">
        <Details />
        </Route>

        
        
        {/* Details page */}

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;

