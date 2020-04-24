import React from 'react';
export function EarningsLineChart() {
  return (
    <div className='col-lg-7 col-xl-8'>
      <div className='card shadow mb-4'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h6 className='text-primary font-weight-bold m-0'>
            Earnings Overview
          </h6>
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
                type: 'line',
                data: {
                  labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                  ],
                  datasets: [
                    {
                      label: 'Earnings',
                      fill: true,
                      data: [
                        '0',
                        '10000',
                        '5000',
                        '15000',
                        '10000',
                        '20000',
                        '15000',
                        '25000',
                      ],
                      backgroundColor: 'rgba(78, 115, 223, 0.05)',
                      borderColor: 'rgba(78, 115, 223, 1)',
                    },
                  ],
                },
                options: {
                  maintainAspectRatio: false,
                  legend: { display: false },
                  title: {},
                  scales: {
                    xAxes: [
                      {
                        gridLines: {
                          color: 'rgb(234, 236, 244)',
                          zeroLineColor: 'rgb(234, 236, 244)',
                          drawBorder: false,
                          drawTicks: false,
                          borderDash: ['2'],
                          zeroLineBorderDash: ['2'],
                          drawOnChartArea: false,
                        },
                        ticks: {
                          fontColor: '#858796',
                          padding: 20,
                        },
                      },
                    ],
                    yAxes: [
                      {
                        gridLines: {
                          color: 'rgb(234, 236, 244)',
                          zeroLineColor: 'rgb(234, 236, 244)',
                          drawBorder: false,
                          drawTicks: false,
                          borderDash: ['2'],
                          zeroLineBorderDash: ['2'],
                        },
                        ticks: {
                          fontColor: '#858796',
                          padding: 20,
                        },
                      },
                    ],
                  },
                },
              }}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
