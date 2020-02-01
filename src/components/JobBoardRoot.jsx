import React from 'react';
import ModuleRoute from 'holocron-module-route';
import Helmet from 'react-helmet';
import csp from '../csp';
import NavBar from './NavBar';

const JobBoardRoot = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Job Board"
      link={[
        { rel: 'icon', href: 'https://sample-cdn.frank/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' },
      ]}
    />
    <NavBar loggedIn={false} onLogout={({})} />
    <section className="section">
      <div className="container">

        {children}
      </div>
    </section>
  </React.Fragment>
);

// Read about childRoutes: https://github.com/americanexpress/one-app#routing
JobBoardRoot.childRoutes = () => ([
  <ModuleRoute path="/" moduleName="job-board-main" />,
  <ModuleRoute path="companies" moduleName="job-board-companies" />,
  <ModuleRoute path="candidates" moduleName="job-board-candidates" />,
  <ModuleRoute path="chat" moduleName="job-board-chat" />,
]);

// Read about appConfig: https://github.com/americanexpress/one-app#appconfig
if (!global.BROWSER) {
  JobBoardRoot.appConfig = {
    csp,
  };
}

export default JobBoardRoot;
