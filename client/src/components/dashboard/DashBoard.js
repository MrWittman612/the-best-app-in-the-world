import React, { Fragment, Profiler } from 'react';
import { Footer } from './navComponents/Footer';
import { SideNavBar } from './navComponents/SideNavBar';
import { DashboardTopNavBar } from './navComponents/DashboardTopNavBar';
import { TitleSection } from './sections/TitleSection';
import { EarningsTab } from './sections/EarningsTab';
import { EarningsAnnual } from './sections/EarningsAnnual';
import { Tasks } from './sections/Tasks';
import { PendingRequests } from './sections/PendingRequests';
import { EarningsLineChart } from './sections/EarningsLineChart';
import { RevenueChart } from './sections/RevenueChart';
import { ProjectsBarChart } from './sections/ProjectsBarChart';
import { ToDoListComponent } from './sections/ToDoListComponent';
import { SectionComponent } from './sections/SectionComponent';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Profile from '../pages/Profile';

export function DashBoard() {
  let { path } = useRouteMatch();
  return (
    <div id='wrapper'>
      <SideNavBar />
      <div className='d-flex flex-column' id='content-wrapper'>
        <div id='content'>
          <DashboardTopNavBar />
          <div className='container-fluid'>
            <Switch>
              <Route path={path}>
                <DashBoardMainView />
              </Route>
              <Route path={`${path}`}>
                <Profile />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
      <a className='border rounded d-inline scroll-to-top' href='#page-top'>
        <i className='fas fa-angle-up'></i>
      </a>
    </div>
  );
}

function DashBoardMainView() {
  return (
    <Fragment>
      <TitleSection />
      <div className='row' id='data-tracking-info'>
        <EarningsTab />
        <EarningsAnnual />
        <Tasks />
        <PendingRequests />
      </div>

      <div className='row'>
        <EarningsLineChart />
        <RevenueChart />{' '}
      </div>

      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <ProjectsBarChart />
          <ToDoListComponent />
        </div>
        <div className='col'>
          <SectionComponent />
        </div>
      </div>
    </Fragment>
  );
}
