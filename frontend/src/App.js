import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
