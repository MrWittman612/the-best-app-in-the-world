import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  console.log(user);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = axios.post('/api/login', user);

      console.log(result);
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
                          value={Login}
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
                        <a className='small' href='forgot-password.html'>
                          Forgot Password?
                        </a>
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
