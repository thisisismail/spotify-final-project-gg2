/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, Link} from '@mui/material/';
import actions from '../../store/redux/actions/index.js';
import {useHistory} from 'react-router-dom';
import {FetchLogin} from '../../API-call/index.js'

const AUTH_URL = FetchLogin();

const ButtonLogin = (props) => {

  const [btn, setBtn] = useState(false);

  let history = useHistory();

  const goPrivate = () => {
    history.push("/private");
  };

  useEffect(() => {
    const token = window.location.hash && window.location.hash
        .substring(1)
        .split("&")
        .find((v) => v.startsWith("access_token"))
        .replace("access_token=", "");
    props.storeTokenToRedux(token);
    console.log(props.tokenFromRedux)
  });

  useEffect(() => {
    if(props.tokenFromRedux !== ''){
        goPrivate();
        console.log(props.tokenFromRedux);
    }
  }, [props.tokenFromRedux])

  const btnGetToken = (e) => {
    setBtn(!btn);
  }

  return (
    <div>
        <Link href={AUTH_URL} underline="none">
          <Button variant="contained" onClick={btnGetToken}>
            LOGIN
          </Button>
        </Link>
    </div>
  )
}

const mapStateToProps = state => { // call global state
  return{
    tokenFromRedux: state.storeToken,
  }
}

const mapDispatchToProps = dispatch => { // change global state
  return{
    storeTokenToRedux: (v) => dispatch(actions.tokenAction(v)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLogin);