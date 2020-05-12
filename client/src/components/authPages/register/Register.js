import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { setAuthToken } from '../../../utils/auth';

export default function Register() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
  });

  let history = useHistory();

  const { lname, fname, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      return alert("Passwords don't match");
    }
    const user = {
      name: `${fname} ${lname}`,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('/api/register', user);

      setAuthToken(response.data.token);
      history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='bg-gradient-primary'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-9 col-lg-12 col-xl-10'>
            <div className='card shadow-lg o-hidden border-0 my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-5 d-none d-lg-flex'>
                    <div
                      className='flex-grow-1 bg-register-image'
                      style={{
                        backgroundImage: "url('/assets/img/dogs/image2.jpeg')",
                      }}
                    ></div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h4 className='text-dark mb-4'>Create an Account!</h4>
                      </div>
                      <form className='user' onSubmit={handleSubmit}>
                        <div className='form-group row'>
                          <div className='col-sm-6 mb-3 mb-sm-0'>
                            <input
                              className='form-control form-control-user'
                              type='text'
                              id='fname'
                              placeholder='First Name'
                              name='fname'
                              value={fname}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className='col-sm-6'>
                            <input
                              className='form-control form-control-user'
                              type='text'
                              id='lname'
                              placeholder='Last Name'
                              name='lname'
                              value={lname}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <input
                            className='form-control form-control-user'
                            type='email'
                            id='email'
                            aria-describedby='emailHelp'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className='form-group row'>
                          <div className='col-sm-6 mb-3 mb-sm-0'>
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
                          <div className='col-sm-6'>
                            <input
                              className='form-control form-control-user'
                              type='password2'
                              id='password2'
                              placeholder='Repeat Password'
                              name='password2'
                              value={password2}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <button
                          className='btn btn-primary btn-block text-white btn-user'
                          type='submit'
                          value='Login'
                        >
                          Register Account
                        </button>
                        <hr />
                        {/* <a
                          className='btn btn-primary btn-block text-white btn-google btn-user'
                          role='button'
                        >
                          <i className='fab fa-google'></i>&nbsp; Register with
                          Google
                        </a> */}
                        <a
                          className='btn btn-primary btn-block text-white btn-facebook btn-user'
                          role='button'
                          href={'#'}
                        >
                          <i className='fab fa-facebook-f'></i>&nbsp; Register
                          with Facebook
                        </a>
                        <hr />
                      </form>
                      <div className='text-center'>
                        <Link className='small' to={'/forgot-password'}>
                          Forgot Password?
                        </Link>
                      </div>
                      <div className='text-center'>
                        <Link className='small' to={'/login'}>
                          Already have an account? Login!
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
