import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { response } from "express";

export default function Register() {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      cosnt response = await axios.post('/api/register', user)
      
    } catch (e) {
      console.error(e)
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
                              value={user.fname}
                            />
                          </div>
                          <div className='col-sm-6'>
                            <input
                              className='form-control form-control-user'
                              type='text'
                              id='lname'
                              placeholder='Last Name'
                              name='lname'
                              value={user.lname}
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <input
                            className='form-control form-control-user'
                            type='email'
                            id='exampleInputEmail'
                            aria-describedby='emailHelp'
                            placeholder='Email Address'
                            name='email'
                            value={user.email}
                          />
                        </div>
                        <div className='form-group row'>
                          <div className='col-sm-6 mb-3 mb-sm-0'>
                            <input
                              className='form-control form-control-user'
                              type='password'
                              id='examplePasswordInput'
                              placeholder='Password'
                              name='password'
                              value={user.password}
                            />
                          </div>
                          <div className='col-sm-6'>
                            <input
                              className='form-control form-control-user'
                              type='password2'
                              id='password2'
                              placeholder='Repeat Password'
                              name='password2'
                              value={user.password2}
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
