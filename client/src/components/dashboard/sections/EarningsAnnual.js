import React from 'react';
export function EarningsAnnual() {
  return (
    <div className='col-md-6 col-xl-3 mb-4'>
      <div className='card shadow border-left-success py-2'>
        <div className='card-body'>
          <div className='row align-items-center no-gutters'>
            <div className='col mr-2'>
              <div className='text-uppercase text-success font-weight-bold text-xs mb-1'>
                <span>Earnings (annual)</span>
              </div>
              <div className='text-dark font-weight-bold h5 mb-0'>
                <span>$215,000</span>
              </div>
            </div>
            <div className='col-auto'>
              <i className='fas fa-dollar-sign fa-2x text-gray-300'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
