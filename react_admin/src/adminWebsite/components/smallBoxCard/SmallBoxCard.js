import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './SmallBoxCard.css';

class SmallBoxCard extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-3 col-xs-6">
                    {/* small box */}
                    <div className={"small-box "+this.props.colour}>
                    <div className="inner">
                        <h3>{this.props.content}</h3>
                    </div>
                    <a href="" onClick={()=>this.props.history.push(this.props.linkTo)} className="small-box-footer"> <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SmallBoxCard);