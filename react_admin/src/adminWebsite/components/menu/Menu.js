import React, { Component } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
            {/* Sidebar user panel */}
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                </div>
                <div className="pull-left info">
                    <p>Jegan</p>
                    <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                </div>
            </div>{/* search form */}
            <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                </button>
                </span>
            </div>
            </form>
            {/* /.search form */}

            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-dashboard" /> <span>Volunteer Management</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="index.html"><i className="fa fa-circle-o" /> View Assigned Schools</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o" /> Calender</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o" /> Claim Form</a></li>
                </ul>
            </li>
            <li className="treeview">
                <a href="">
                <i className="fa fa-pie-chart" />
                <span> Administrator</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><Link to="/adminAccessReview"><i className="fa fa-circle-o" /> Access Reviews</Link></li>
                <li><Link to="/adminNewSchoolReview"><i class="fa fa-circle-o"></i> School's New requirements </Link></li>
                <li><a href="admin_maintainence_school_request_list.html"><i class="fa fa-circle-o"></i> School's Maintainence requests </a></li>
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o" /> Assign Schools to Volunteers</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o" /> Initiate email to CEO</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" /> Manage Users and Roles</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" /> Manage events</a></li>
                </ul>
            </li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-laptop" />
                <span> Fund Management</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="pages/UI/general.html"><i className="fa fa-circle-o" /> Fund Approvals</a></li>
                <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o" /> Fund Allotments</a></li>
                <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o" /> Fund Disbursement</a></li>
                </ul>
            </li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-edit" /> <span>Reports</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="pages/forms/general.html"><i className="fa fa-circle-o" /> School-Wise Reports</a></li>
                <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o" /> Retailer Contributions</a></li>
                <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o" /> Sponsor Contributions</a></li>
                </ul>
            </li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-table" /> <span>Sponsor Management</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o" /> Logistics Expenses</a></li>
                </ul>
            </li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-folder" /> <span>Retail Management</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o" /> Manage Retailers</a></li>
                <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o" /> Contact Retailers</a></li>
                </ul>
            </li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-folder" /> <span>Vendor Management</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o" /> Invoice</a></li>
                <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o" /> Profiles</a></li>
                <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o" /> Manage Vendors</a></li>
                </ul>
            </li>
            {/* 
              <li className="treeview">
                <a href="#">
                <i className="fa fa-files-o" />
                <span>Layout Options</span>
                <span className="pull-right-container">
                    <span className="label label-primary pull-right">4</span>
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o" /> Top Navigation</a></li>
                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o" /> Boxed</a></li>
                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o" /> Fixed</a></li>
                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o" /> Collapsed Sidebar</a></li>
                </ul>
            </li>
            <li>
                <a href="pages/widgets.html">
                <i className="fa fa-th" /> <span>Widgets</span>
                <span className="pull-right-container">
                    <small className="label pull-right bg-green">new</small>
                </span>
                </a>
            </li>
            
            
            
            <li>
                <a href="pages/calendar.html">
                <i className="fa fa-calendar" /> <span>Calendar</span>
                <span className="pull-right-container">
                    <small className="label pull-right bg-red">3</small>
                    <small className="label pull-right bg-blue">17</small>
                </span>
                </a>
            </li>
            <li>
                <a href="pages/mailbox/mailbox.html">
                <i className="fa fa-envelope" /> <span>Mailbox</span>
                <span className="pull-right-container">
                    <small className="label pull-right bg-yellow">12</small>
                    <small className="label pull-right bg-green">16</small>
                    <small className="label pull-right bg-red">5</small>
                </span>
                </a>
            </li>
            <li className="treeview">
                <a href="#">
                <i className="fa fa-share" /> <span>Multilevel</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                </span>
                </a>
                <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o" /> Level One</a></li>
                <li className="treeview">
                    <a href="#"><i className="fa fa-circle-o" /> Level One
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                    </span>
                    </a>
                    <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o" /> Level Two</a></li>
                    <li className="treeview">
                        <a href="#"><i className="fa fa-circle-o" /> Level Two
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right" />
                        </span>
                        </a>
                        <ul className="treeview-menu">
                        <li><a href="#"><i className="fa fa-circle-o" /> Level Three</a></li>
                        <li><a href="#"><i className="fa fa-circle-o" /> Level Three</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a href="#"><i className="fa fa-circle-o" /> Level One</a></li>
                </ul>
            </li>
            <li><a href="https://adminlte.io/docs"><i className="fa fa-book" /> <span>Documentation</span></a></li>
            <li className="header">LABELS</li>
            <li><a href="#"><i className="fa fa-circle-o text-red" /> <span>Important</span></a></li>
            <li><a href="#"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></a></li>
            <li><a href="#"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li> */}
            </ul>
        </section>
        {/* /.sidebar */}
        </aside>

            </div>
        );
    }
}

export default Menu;