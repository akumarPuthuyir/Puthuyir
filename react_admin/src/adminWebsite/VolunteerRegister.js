import React, { Component } from 'react';
import RegisterForm from '../adminWebsite/components/registerForm/registerForm';

class VolunteerRegister extends Component {
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
                        <input type="text" className="form-control" disabled placeholder="Sponsor Name" />
                        <span className="glyphicon glyphicon-user form-control-feedback" />
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