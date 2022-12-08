import React from 'react';
import loginImg from '../assets/images/login-img.png';
import logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='App'>
      <main className='login-page'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='login-frame'>
              <img src={loginImg} alt='' />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='login-details'>
              <div className='login-logo'>
                <img src={logo} alt='Daily Stop Logo' />
              </div>
              <h3>Login</h3>
              <form action='' method='post'>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter your email'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    name='password'
                    id='pwd'
                    placeholder='********'
                  />
                </div>
                <p>Forgot Password?</p>
                <Link to='/dashboard'>
                  <button className='login-btn' type='button'>
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
