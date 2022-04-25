import React, { useState, useEffect } from "react";
import { loginUser } from "../../js/actions/user";
import Nav from "../loyout/navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userAuth = useSelector((state) => state.userReducer.isAuth);
  const navig = (email, password) => {
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (userAuth === true) {
      navigate("/acceil");
    } else {
      navigate("/login");
    }
  }, [userAuth]);

  return (
    <div>
      <form>
        <Nav />
        <h3>Sign In</h3>
        <div className='form-group'>
          <label>Email address</label>
          <input
            id='user'
            type='text'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            id='pass'
            type='password'
            className='form-control'
            data-type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Enter password'
          />
        </div>
        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>
      </form>
      <button
        type='submit'
        className='btn btn-primary btn-block'
        defaultValue='Sign In'
        onClick={() => navig(email, password)}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
