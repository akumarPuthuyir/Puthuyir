import React from 'react';
import './App.css';
import {withRouter,Router,Switch} from 'react-router-dom';
import history from './history';

import Route from 'react-router-dom/Route';
import AdminIndex from '../adminWebsite/adminIndex';
import AdminNewSchoolReview from '../adminWebsite/adminNewSchoolReview';
import AdminAccessReview from '../adminWebsite/adminAccessReview';
import AdminRoleCheck from '../adminWebsite/adminRoleCheck';

function App() {
  
  return (
    <div>   
      <Router history={history}>
        <Switch>
          <Route path="/adminIndex" component={()=><AdminIndex/>}/>
          <Route path="/adminNewSchoolReview" component={()=><AdminNewSchoolReview/>}/>
          <Route path="/adminAccessReview" component={()=><AdminAccessReview/>}/>
          <Route path="/adminRoleCheck/:userId" component={(props)=><AdminRoleCheck {...props}/>}/>
        </Switch>
      </Router>
    </div>

  );
}

export default withRouter(App);
