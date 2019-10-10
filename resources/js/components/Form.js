import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const phoneRegex = RegExp(
    /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
);

const dateOfBirthRegex = RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
);

class Form extends Component {

    constructor () {
        super();
        this.state = {
          forms: []
        }
        console.log(super());
    };

    componentDidMount() {
        axios.get('api/form').then( Response => {
            this.setState({
                forms: Response.data
            });
            
        }).catch(errors => {
            console.log(errors);
        })
    } 

render() {
    return (
        <div className="container" id="mycontainer">
            <div className="row justify-content-center">
                <div className="col-md-8" id="mycol">

                    <div className="accordion" id="accordionMain">

                        <div className="card" id="my-card">
                            <div className="my-card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <div id="card-heading" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Step 1: Your details
                                    </div>
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionMain">
                                <div className="card-body" id="my-card-body">

                                    <div className="row">
                                        <div className="col-4">
                                            <label id="text-field-title">First Name</label>
                                            <input id="text-field" type="text" name="firstname"/>
                                        </div>
                                        <div className="col-4">
                                            <label id="text-field-title">Surname</label>
                                            <input id="text-field" type="text" name="lastname"/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <label id="text-field-title">Email Address</label>
                                            <input id="text-field" type="text" name="email"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12"><button id="next-btn" type="button">Next <i className="fa fa-angle-right"></i></button></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="mybreak"></div>

                        <div className="card" id="my-card">
                            <div className="my-card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <div id="card-heading" className="collapsed" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Step 2: More comments
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionMain">
                                <div className="card-body" id="my-card-body">

                                    <div className="row">
                                        <div className="col-4">
                                            <label id="text-field-title">Telephone Number</label>
                                            <input id="text-field" type="text" name="phonenumber"/>
                                        </div>
                                        <div className="col-4">
                                            <label id="text-field-title">Gender</label>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Select Gender
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button className="dropdown-item" type="button">Male</button>
                                                    <button className="dropdown-item" type="button">Female</button>
                                                    <button className="dropdown-item" type="button">Other</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="row">
                                        <div className="col-4">
                                            <label id="text-field-title">Date of birth</label>
                                            <div className="row">
                                                <div className="col-4"><input id="text-field-date" type="text" name="day"/></div>
                                                <div className="col-4"><input id="text-field-date" type="text" name="month"/></div>
                                                <div className="col-4"><input id="text-field-date" type="text" name="year"/></div>
                                            </div>             
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12"><button id="next-btn" type="button">Next <i className="fa fa-angle-right"></i></button></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="mybreak"></div>

                        <div className="card" id="my-card">
                            <div className="my-card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <div id="card-heading" className="collapsed" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Step 3: Final comments
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionMain">
                                <div className="card-body" id="my-card-body">
                                    <div className="row">
                                        <div className="col-xl-11">
                                <div className="row"> <label  id="text-field-title">Comments</label></div>
                                            
                                            <textarea  id="myCommentBox" cols="40" rows="5" name="comments"></textarea>
                                        </div>                                    
                                        <div className="col-12"> <button id="next-btn" type="button">Next<i className="fa fa-angle-right"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

}
export default Form
