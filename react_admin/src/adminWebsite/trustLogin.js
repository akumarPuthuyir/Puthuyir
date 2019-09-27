import React, { Component } from 'react';

class trustLogin extends Component {
    render() {
        return (
            <body className="hold-transition login-page">
<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Puthuyir</b></a>
  </div>
  {/* /.login-logo */}
  <div className="login-box-body">
    <p className="login-box-msg">Sign in to start your session</p>
    <form action="../../sponsor_main_screen.html" method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email" />
        <span className="glyphicon glyphicon-envelope form-control-feedback" />
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password" />
        <span className="glyphicon glyphicon-lock form-control-feedback" />
      </div>
      <div className="row">
        {/* /.col */}
        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        {/* /.col */}
      </div>
    </form>
    {/* /.social-auth-links */}
    <a href="#">I forgot my password</a><br />
    <a href="trustRegister.html" className="text-center">Register a new membership</a>
  </div>
  {/* /.login-box-body */}
</div>
</body>

        );
    }
}

export default trustLogin;