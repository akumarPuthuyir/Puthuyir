import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SponsorMenu from './components/menu/SponsorMenu';
import SmallBoxCard from './components/smallBoxCard/SmallBoxCard';

class ReferVolunteer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SponsorMenu/>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <SmallBoxCard content="Sponsor" linkTo="/sponsor" colour="bg-green"/>
                            {/* ./col */}
                            <SmallBoxCard content="Inbox" linkTo="/volunteer" colour="bg-yellow"/>
                            {/* ./col */}
                            <SmallBoxCard content="Logout" linkTo="/reviewer" colour="bg-red"/>{/* ./col */}
                        </div>
                        <h1>
                        Sponsor
                        <small>screen</small>
                        </h1>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        {/* Small boxes (Stat box) */}
                        {/* /.row */}
                        {/* Main row */}
                        <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Refer volunteer</h3>
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                <div className="form-group">
                                <label>Select by District</label>
                                <select className="form-control select2" style={{width: '20%'}}>
                                    <option selected="selected">Select</option>
                                    <option>Cuddalore</option>
                                    <option>Kanchipuram</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <label>Select by Town</label>
                                <select className="form-control select2" style={{width: '20%'}}>
                                    <option selected="selected">Select</option>
                                    <option>Neyveli</option>
                                    <option>Chengalpattu</option>
                                </select>
                                </div>
                                <div className="input-group">
                                <span className="input-group-addon">Enter Email id's</span>
                                <textarea className="form-control" rows={3} placeholder="Enter email id's" defaultValue={""} />
                                </div>
                                <div className="input-group">
                                <br />
                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-warning">
                                    Cancel
                                </button>&nbsp;
                                <a href="pages/examples/volunteerRegister.html"><button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-success">
                                    Send Email to contacts
                                    </button></a>
                                </div>
                            </div>
                            {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        </div>
                        {/* /.row (main row) */}
                    </section>
                    {/* /.content */}
                    </div>

                <Footer/>
            </div>
        );
    }
}

export default ReferVolunteer;