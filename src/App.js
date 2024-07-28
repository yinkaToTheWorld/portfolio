import './App.css';
import Home from './Home';
import Page from './Page';
import Notfound from './404';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
<Routes>
<Route exact path='/'element={<Home/>} />
<Route exact path='/main'element={<Page/>} />
  <Route path ='*' element={<Notfound/>} />
</Routes>
 </div>
  
  </Router>
  );
}

export default App;
