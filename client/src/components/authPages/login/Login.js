import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { setAuthToken } from '../../../utils/auth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const { email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', formData);
      setAuthToken(response.data.token);

      history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='bg-gradient-primary'>
      <div className='container min-vh-100 py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-9 col-lg-12 col-xl-10'>
            <div className='card shadow-lg o-hidden border-0 my-3'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-flex'>
                    <div
                      className='flex-grow-1 bg-login-image'
                      style={{
                        backgroundImage: "url('/assets/img/dogs/image3.jpeg')",
                      }}
                    ></div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h4 className='text-dark mb-4'>Welcome Back!</h4>
                      </div>
                      <form className='user' onSubmit={handleSubmit}>
                        <div className='form-group'>
                          <input
                            className='form-control form-control-user'
                            type='email'
                            id='email'
                            aria-describedby='emailHelp'
                            placeholder='Enter Email Address...'
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            className='form-control form-control-user'
                            type='password'
                            id='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* <div className='form-group'>
                          <div className='custom-control custom-checkbox small'>
                            <div className='form-check'>
                              <input
                                className='form-check-input custom-control-input'
                                type='checkbox'
                                id='formCheck-1'
                              />
                              <label
                                className='form-check-label custom-control-label'
                                for='formCheck-1'
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div> */}
                        <button
                          className='btn btn-primary btn-block text-white btn-user'
                          type='submit'
                          value='Login'
                        >
                          Login
                        </button>
                        <hr />
                        {/* <a
                          className='btn btn-primary btn-block text-white btn-google btn-user'
                          role='button'
                        >
                          <i className='fab fa-google'></i>&nbsp; Login with
                          Google
                        </a> */}
                        <a
                          className='btn btn-primary btn-block text-white btn-facebook btn-user'
                          role='button'
                        >
                          <i className='fab fa-facebook-f'></i>&nbsp; Login with
                          Facebook
                        </a>
                        <hr />
                      </form>
                      <div className='text-center'>
                        <Link className='small' to={'/forgot-password'}>
                          Forgot Password?
                        </Link>
                      </div>
                      <div className='text-center'>
                        <Link className='small' to={'/register'}>
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
