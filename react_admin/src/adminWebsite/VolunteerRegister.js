import React, { Component } from 'react';
import RegisterForm from '../adminWebsite/components/registerForm/registerForm';

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const url=window.location.href;

class VolunteerRegister extends Component {
    state={
      sponsor:{
        name : cryptr.decrypt(url.split("?")[1].split("&")[0]),
        email : cryptr.decrypt(url.split("?")[1].split("&")[1])
      }
    }
    render() {
        return (
            <body class="hold-transition register-page">
              <div className="register-box">
                <div className="register-logo">
                  <b>Welcome to Putholi</b>
                </div>
                <div className="register-box-body">
                  <p className="login-box-msg"><b>Register as Volunteer</b></p>
                  <div>
                    <div className="row">
                      <div className="form-group has-feedback col-md-6">
                        <input type="text" className="form-control" disabled value={"Sponsor name : "+this.state.sponsor.name}></input>
                        <span className="glyphicon glyphicon-user form-control-feedback" />
                      </div>
                      <div className="form-group has-feedback col-md-6">
                        <input type="text" className="form-control" disabled value={"Sponsor Email  : "+this.state.sponsor.email}/>
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                      </div>
                    </div>
                    <RegisterForm saveUser={(user)=>this.props.saveUser(user)} roles={["Volunteer"]}/>
                   </div>
                   </div>
                {/* /.form-box */}
              </div>
          </body>

        );
    }
}

export default VolunteerRegister;