import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SponsorMenu from './components/menu/SponsorMenu';
import SmallBoxCard from './components/smallBoxCard/SmallBoxCard';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class ReferVolunteer extends Component {
    state={
        sponsor:{
            Name:"Jegan",
            Email:"jegan@putholi.com"
        },
        pincode:null,
        locality:null,
        selectedLocality:null,
        district:null,
        city:null,
        state:null,
        createLocalityDropDown:false,
        spinner:false,
        lastErrorField:null,
        url:null
    }
    createURL=()=>{
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotalySecretKey');
        
        const encryptedName = cryptr.encrypt(this.state.sponsor.Name);
        const encryptedEmail =cryptr.encrypt(this.state.sponsor.Email);
        const url1 = "http://localhost:3000/volunteerRegister?"+encryptedName+"&"+encryptedEmail;
        this.setState({url:url1})
    }
    handleChange=({target})=>{
        document.getElementById(target.id).style.borderColor="#d2d6de";
        this.setState({ 
            [target.id]: target.value , 
            lastErrorField:null,
            errorMessage:""
        });
        if(target.id==="pincode" && target.value.length===6){
            this.setState({spinner:true});
            axios.get("https://api.postalpincode.in/pincode/"+target.value)
            .then(res=>{
                console.log(res);
                if(res.data[0].Message==="No records found"){
                    this.setState({
                        spinner:false,
                        errorMessage:"Please enter valid Pincode or enter address manually."
                    })
                }
                else{                    
                    this.setState({
                        locality:res.data[0].PostOffice,
                        city:res.data[0].PostOffice[0].Division,
                        district:res.data[0].PostOffice[0].District,
                        state:res.data[0].PostOffice[0].State,
                        country:res.data[0].PostOffice[0].Country,
                        createLocalityDropDown:true,
                        spinner:false
                    });
                }
            })
        }
        else if(target.id==="identityProof"){
            this.setState({spinner:true});
            const reader=new FileReader();
            const file=target.files[0];
            
            reader.onloadend=()=>{
                this.setState({
                    identityProof:file,
                    localImageUrl:reader.result,
                    spinner:false
                })
            }
            reader.readAsDataURL(file)
        }
    }
     currentPincode=()=>{
        if(this.state.pincode!=null&&this.state.pincode.length!=6){
            this.setState({pinCode:""});
            document.getElementById("pincode").value="";
        }
    }
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
                            <div className="row">
                                <div className="form-group has-feedback col-md-6">
                                    <input type="text" className="form-control" id="pincode" placeholder="Pincode" onChange={this.handleChange} onPointerLeave={()=>this.currentPincode()}/>
                                    <span className="glyphicon glyphicon-home form-control-feedback" />
                                </div>
                                <div className="form-group has-feedback col-md-6">
                                    <select className="form-control select2" id="selectedLocality" value={this.state.selectedLocality} onChange={this.handleChange} style={{width: '100%'}}>
                                        <option selected="selected">Select Locality</option>
                                        {this.state.createLocalityDropDown?this.state.locality.map((locality) => <option key={locality.Name} value={locality.Name}>{locality.Name}</option>):null}
                                    </select>
                                    <span className="glyphicon glyphicon-home form-control-feedback" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group has-feedback col-md-6">
                                    <input type="text" className="form-control" id="city" value={this.state.city} placeholder="City" onChange={this.handleChange}/>
                                    <span className="glyphicon glyphicon-home form-control-feedback" />
                                </div>
                                <div className="form-group has-feedback col-md-6">
                                    <input type="text" className="form-control" id="district" value={this.state.district} placeholder="District" onChange={this.handleChange}/>
                                    <span className="glyphicon glyphicon-home form-control-feedback" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group has-feedback col-md-6">
                                    <input type="text" className="form-control" id="state" value={this.state.state} placeholder="State" onChange={this.handleChange}/>
                                    <span className="glyphicon glyphicon-home form-control-feedback" />
                                </div>
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
                                <button type="button" onClick={()=>this.createURL()} className="btn btn-success" data-toggle="modal" data-target="#modal-success">
                                    Send Email to contacts
                                    </button>
                                </div>
                            </div>
                            {this.state.url!=null?<div>{this.state.url}</div>:null}
                            {/* /.box-body */}
                            </div>
                            {/* /.box */}
                        </div>
                        </div>
                        {/* /.row (main row) */}
                    </section>
                    {/* /.content */}
                    </div>
                    {this.state.spinner?<div class="spinner"></div>:null}
                <Footer/>
            </div>
        );
    }
}

export default withRouter(ReferVolunteer);