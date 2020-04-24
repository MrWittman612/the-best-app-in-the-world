import React from 'react';
export function PendingRequests() {
  return (
    <div className='col-md-6 col-xl-3 mb-4'>
      <div className='card shadow border-left-warning py-2'>
        <div className='card-body'>
          <div className='row align-items-center no-gutters'>
            <div className='col mr-2'>
              <div className='text-uppercase text-warning font-weight-bold text-xs mb-1'>
                <span>Pending Requests</span>
              </div>
              <div className='text-dark font-weight-bold h5 mb-0'>
                <span>18</span>
              </div>
            </div>
            <div className='col-auto'>
              <i className='fas fa-comments fa-2x text-gray-300'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
