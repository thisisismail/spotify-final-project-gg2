// import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import LoginPage from '../src/sections/body/login-page/index.js';
import BodyPage from '../src/sections/body/playlist-page';
import themeKoe from '../src/material-ui/theme/index.js';
import NavBar from '../src/sections/header/index.js';

function App(props) {
  return (
    <ThemeProvider theme={themeKoe}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Router>
            <Switch>
              <Route path="/" exact>
                <LoginPage/>
              </Route>
              <Route path="/private">
                {
                  (props.tokenFromRedux !== '') 
                  ? ( <BodyPage/> ) 
                  : ( <Redirect to="/"/> )
                }
              </Route>
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return{
    tokenFromRedux: state.storeToken,
  }
}

export default connect(mapStateToProps)(App);
