import React from 'react';
export function RevenueChart() {
  return (
    <div className='col-lg-5 col-xl-4'>
      <div className='card shadow mb-4'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h6 className='text-primary font-weight-bold m-0'>Revenue Sources</h6>
          <div className='dropdown no-arrow'>
            <button
              className='btn btn-link btn-sm dropdown-toggle'
              data-toggle='dropdown'
              aria-expanded='false'
              type='button'
            >
              <i className='fas fa-ellipsis-v text-gray-400'></i>
            </button>
            <div
              className='dropdown-menu shadow dropdown-menu-right animated--fade-in'
              role='menu'
            >
              <p className='text-center dropdown-header'>dropdown header:</p>
              <a className='dropdown-item' role='presentation' href='#'>
                &nbsp; Action
              </a>
              <a className='dropdown-item' role='presentation' href='#'>
                &nbsp; Another action
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' role='presentation' href='#'>
                &nbsp; Something else here
              </a>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='chart-area'>
            <canvas
              data-bs-chart={{
                type: 'doughnut',
                data: {
                  labels: ['Direct', 'Social', 'Referral'],
                  datasets: [
                    {
                      label: '',
                      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                      borderColor: ['#ffffff', '#ffffff', '#ffffff'],
                      data: ['50', '30', '15'],
                    },
                  ],
                },
                options: {
                  maintainAspectRatio: false,
                  legend: { display: false },
                  title: {},
                },
              }}
            ></canvas>
          </div>
          <div className='text-center small mt-4'>
            <span className='mr-2'>
              <i className='fas fa-circle text-primary'></i>
              &nbsp; Direct
            </span>
            <span className='mr-2'>
              <i className='fas fa-circle text-success'></i>
              &nbsp; Social
            </span>
            <span className='mr-2'>
              <i className='fas fa-circle text-info'></i>
              &nbsp; Refferal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
