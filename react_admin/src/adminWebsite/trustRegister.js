import React, { Component } from 'react';
import RegisterForm from '../adminWebsite/components/registerForm/registerForm';

class trustRegister extends Component {
    render() {
        return (
          <body className="hold-transition register-page">
            <div className="register-box">
              <div className="register-logo">
                <b>Welcome to Puthuyir</b>
              </div>
              <div className="register-box-body">
                <p className="login-box-msg"><b>Register a new membership</b></p>
                <RegisterForm saveUser={(user)=>this.props.saveUser(user)} roles={["Admin","Approver","Sponsor"]}/>
              </div>
            </div>
          </body>
        );
    }
}

export default trustRegister;