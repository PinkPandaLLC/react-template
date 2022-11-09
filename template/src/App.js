// Imports
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// Styles
import './App.css'

// Pages and Components
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

// Components
import Navbar from './components/Navbar';

function App() {
  const { user, authIsReady } = useAuthContext() 

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                { !user && <Redirect to="/login"/>}
                { user && <Redirect to="/"/>} 
              </Route>
              <Route path="/login">
                { !user && <Login />}
                { user && <Redirect to="/"/>}
              </Route>
              <Route path="/signup">
                {!user && <Signup /> }
                {user && <Redirect to="/"/>}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
