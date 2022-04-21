import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../src/sections/body/login-page/index.js';
import BodyPage from '../src/sections/body/playlist-page';

function App(props) {
  return (
    <div className="App">
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage/>
          </Route>
          <Route path="/private">
            {/* <Link to="/">Login</Link><br></br><br></br> */}
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
  );
}

const mapStateToProps = state => {
  return{
    tokenFromRedux: state.storeToken,
  }
}


export default connect(mapStateToProps)(App);
