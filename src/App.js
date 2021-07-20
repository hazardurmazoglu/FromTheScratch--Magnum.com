import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>

      <Navbar/>

      <Switch>
        <Route path="/" exact component= {Home}></Route>
        
      </Switch>

      <Footer/>

    </Router>
    </>
  );
}

export default App;
