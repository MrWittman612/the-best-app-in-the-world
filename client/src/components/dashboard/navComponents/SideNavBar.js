import React from 'react';
import { Link } from 'react-router-dom';

export function SideNavBar() {
  return (
    <nav className='navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0'>
      <div className='container-fluid d-flex flex-column p-0'>
        <Link
          className='navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0'
          href={'/'}
        >
          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-laugh-wink'></i>
          </div>
          <div className='sidebar-brand-text mx-3'>
            <span>My App</span>
          </div>
        </Link>
        <hr className='sidebar-divider my-0' />
        <ul className='nav navbar-nav text-light' id='accordionSidebar'>
          <li className='nav-item' role='presentation'>
            <a className='nav-link active' href='index.html'>
              <i className='fas fa-tachometer-alt'></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className='nav-item' role='presentation'>
            <Link className='nav-link' to={'/dashboard/profile'}>
              <i className='fas fa-user'></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
        <div className='text-center d-none d-md-inline'>
          <button
            className='btn rounded-circle border-0'
            id='sidebarToggle'
            type='button'
          ></button>
        </div>
      </div>
    </nav>
  );
}
