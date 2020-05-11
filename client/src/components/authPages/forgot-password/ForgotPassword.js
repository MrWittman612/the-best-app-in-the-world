import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className='bg-gradient-primary'>
      <div className='container min-vh-100 py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-9 col-lg-12 col-xl-10'>
            <div className='card shadow-lg o-hidden border-0 my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-flex'>
                    <div
                      className='flex-grow-1 bg-password-image'
                      style={{
                        backgroundImage: "url('/assets/img/dogs/image1.jpeg')",
                      }}
                    ></div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h4 className='text-dark mb-2'>
                          Forgot Your Password?
                        </h4>
                        <p className='mb-4'>
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form className='user'>
                        <div className='form-group'>
                          <input
                            className='form-control form-control-user'
                            type='email'
                            id='exampleInputEmail'
                            aria-describedby='emailHelp'
                            placeholder='Enter Email Address...'
                            name='email'
                          />
                        </div>
                        <button
                          className='btn btn-primary btn-block text-white btn-user'
                          type='submit'
                        >
                          Reset Password
                        </button>
                      </form>
                      <div className='text-center'>
                        <hr />
                        <Link className='small' to={'/register.html'}>
                          Create an Account!
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
