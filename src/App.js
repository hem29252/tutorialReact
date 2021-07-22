import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/views/Home'
import News from './components/views/News'
import Login from './components/views/Login'
import Register from './components/views/Register'
import About from './components/views/About'

const NotFound = () => <h1>Not Found 404</h1>

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/news" component={News} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
