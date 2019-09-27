import React, {Component} from 'react';
import './App.css';
import {withRouter,Router,Switch} from 'react-router-dom';
import history from './history';
import axios from 'axios';

import Route from 'react-router-dom/Route';
import AdminIndex from '../adminWebsite/adminIndex';
import AdminNewSchoolReview from '../adminWebsite/adminNewSchoolReview';
import AdminAccessReview from '../adminWebsite/adminAccessReview';
import AdminRoleCheck from '../adminWebsite/adminRoleCheck';
import TrustRegister from '../adminWebsite/trustRegister';
import TrustLogin from '../adminWebsite/trustLogin';
import VolunteerLogin from '../adminWebsite/VolunteerLogin';
import VolunteerRegister from '../adminWebsite/VolunteerRegister';
import AccessConfirmation from '../adminWebsite/AccessConfirmationScreen';
import AccessRejection from '../adminWebsite/AccessRejectionScreen';
import SponsorMainScreen from '../adminWebsite/SponsorMainScreen';
import ReferVolunteer from '../adminWebsite/ReferVolunteer';


class App extends Component {
  state = {
    user:""
  }

  saveUser=(updatedUser)=>{
    this.setState({user:updatedUser});
    axios.post('http://localhost:6060/puthuyir/user',updatedUser)
    .then(res=>{
        console.log(res);
    })
  }
  
  render(){
    return (
      <div>   
        <Router history={history}>
          <Switch>
            <Route path="/adminIndex" component={()=><AdminIndex/>}/>
            <Route path="/adminNewSchoolReview" component={()=><AdminNewSchoolReview/>}/>
            <Route path="/adminAccessReview" component={()=><AdminAccessReview/>}/>
            <Route path="/adminRoleCheck/:userId" component={(props)=><AdminRoleCheck {...props}/>}/>
            <Route path="/trustRegister" component={()=><TrustRegister saveUser={(user)=>this.saveUser(user)}/>}/>}/>
            <Route path="/trustLogin" component={()=><TrustLogin/>}/>
            <Route path="/volunteerLogin" component={()=><VolunteerLogin/>}/>
            <Route path="/volunteerRegister" component={()=><VolunteerRegister saveUser={(user)=>this.saveUser(user)}/>}/>
            <Route path="/accessRejection" component={()=><AccessRejection/>}/>
            <Route path="/accessConfirmation" component={()=><AccessConfirmation/>}/>
            <Route path="/sponsorMainScreen" component={()=><SponsorMainScreen/>}/>
            <Route path="/referVolunteer" component={()=><ReferVolunteer/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
