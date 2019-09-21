import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import './components/header/Header.css';
import './css/adminMainPage.css';
import { Link } from 'react-router-dom';

class adminRoleCheck extends Component {
    state={
        user:this.props.location.user
    }
    
    render() {
        console.log(this.state.user)
        return (
            <div class="adminContainer" style={{fontSize:"large"}}>
                {this.state.getUserList?this.userList():null}
                <Header/>
                <Menu/>
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1>
      Jagan kumar
      <small>added on</small>
    </h1>
    <ol className="breadcrumb">
      <li><a href="../../admin_main_screen.html"><i className="fa fa-dashboard" /> Home</a></li>
      <li><a href="#">UI</a></li>
      <li className="active">Timeline</li>
    </ol>
  </section>
  {/* Main content */}
  <section className="content">
    {/* row */}
    <div className="row">
      <div className="col-md-12">
        {/* The time line */}
        <ul className="timeline">
          {/* timeline time label */}
          <li className="time-label">
            <span className="bg-red">
              {this.props.location.user.createdDate.split('T')[0]}
            </span>
          </li>
          {/* /.timeline-label */}
          {/* timeline item */}
          <li>
            <i className="fa fa-envelope bg-blue" />
            <div className="timeline-item">
              <h3 className="timeline-header"><strong>User Details</strong> listed below</h3>
              <div className="timeline-body">
                <div className="box-body">
                  <ul>
                    <li>Gender - {this.props.location.user.gender}</li>
                    <li>Email - {this.props.location.user.emailAddress}</li>
                    <li>Role Requested -  <b><i>{this.props.location.user.role}</i></b></li>
                    <li>Contact number - {this.props.location.user.phoneNumber}</li>
                    <li>Address -
                        {this.props.location.user.address.addressLine1},
                        {this.props.location.user.address.addressLine2},
                        {this.props.location.user.address.locality},
                        {this.props.location.user.address.city},
                        {this.props.location.user.address.district},
                        {this.props.location.user.address.state}.
                    </li>
                  </ul>     
                </div>
              </div>
              <div className="timeline-footer">
                <a href="Access_Confirmation_Screen.html" className="btn btn-primary btn-xs">Approve Access</a>&nbsp;
                <a href="Access_Rejection_Screen.html" className="btn btn-primary btn-xs">Reject Access</a>&nbsp;
                <Link to="/adminAccessReview" className="btn btn-primary btn-xs">Back to User List</Link>
              </div>
            </div>
          </li>
          <li>
            <i className="fa fa-user bg-aqua" />
            <div className="timeline-item">
              <h3 className="timeline-header no-border">User to resubmit the required details</h3>
            </div>
          </li>
          <li>
            <i className="fa fa-user bg-aqua" />
            <div className="timeline-item">
              <h3 className="timeline-header no-border"><a href="#">User request History - </a> Access Granted</h3>
            </div>
          </li>
          {/* END timeline item */}
          {/* timeline item */}
          {/* END timeline item */}
          {/* timeline time label */}
          {/* /.timeline-label */}
          {/* timeline item */}
          {/* END timeline item */}
          {/* timeline item */}
          <li>
            <div className="timeline-footer">
              <a href="#" className="btn btn-xs bg-maroon">Go to Top</a>
            </div>
          </li>
          {/* END timeline item */}
        </ul>
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
    {/* /.row */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

                <Footer/>
            </div>
        );
    }
}

export default adminRoleCheck;