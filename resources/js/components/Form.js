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
            firstName: null,
            Surname: null,
            email: null,
            mobile: null,
            gender: null,
            birthday: null,
            comments: null,
            formErrors: {
                firstName: "",
                Surname: "",
                email: "",
                mobile: "",
                gender: "",
                birthday: "",
                comments: ""
            }
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
                <form className="col-md-8" id="mycol" onSubmit={this.handleSubmit} noValidate>
                    
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
                                            <div className="col-4 firstName">
                                                <label htmlFor="firstName" id="text-field-title">First Name</label>
                                                <input 
                                                    // className={}
                                                    id="text-field" 
                                                    type="text" 
                                                    name="firstName"
                                                    onChange={this.handleChange}
                                                    noValidate
                                                />
                                            </div>

                                            <div className="col-4 surname">
                                                <label htmlFor="surname" id="text-field-title">Surname</label>
                                                <input 
                                                    // className={}
                                                    id="text-field" 
                                                    type="text" 
                                                    name="surname"
                                                    onChange={this.handleChange}
                                                    noValidate
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-4 email">
                                                <label htmlFor="email" id="text-field-title">Email Address</label>
                                                <input 
                                                    // className={}
                                                    id="text-field" 
                                                    type="text" 
                                                    name="email"
                                                    onChange={this.handleChange}
                                                    noValidate
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12"><div role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="next-btn" >Next <i className="fa fa-angle-right"></i></div></div>
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
                                            <div className="col-4 mobileNumber">
                                                <label htmlFor="mobileNumber" id="text-field-title">Telephone Number</label>
                                                <input 
                                                    // className={}
                                                    id="text-field" 
                                                    type="text" 
                                                    name="mobileNumber"
                                                    onChange={this.handleChange}
                                                    noValidate
                                                />
                                            </div>
                                            <div className="col-4 gender">
                                                <label htmlFor="gender" id="text-field-title">Gender</label>
                                                <div className="dropdown">
                                                    <select id="dropdown-btn" name="gender" className="dropdown">
                                                            <option  value="">Select Gender</option>
                                                            <option  value="male"  className="dropdown-item" >Male</option>
                                                            <option  value="female" className="dropdown-item" >Female</option>
                                                            <option  value="other" className="dropdown-item" >Other</option>    
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <label htmlFor="birthday" id="text-field-title">Date of birth</label>
                                                <div className="row">
                                                    <div className="col-4 birthday">
                                                        <input 
                                                            // className={}
                                                            id="text-field-date" 
                                                            type="text" 
                                                            name="day"
                                                            onChange={this.handleChange}
                                                            noValidate
                                                        />
                                                    </div>
                                                    <div className="col-4 birthday">
                                                        <input 
                                                            // className={}                                                        
                                                            id="text-field-date" 
                                                            type="text" 
                                                            name="month"
                                                            onChange={this.handleChange}
                                                            noValidate
                                                        />
                                                    </div>
                                                    <div className="col-4 birthday">
                                                        <input
                                                            // className={}                                                         
                                                            id="text-field-date" 
                                                            type="text" 
                                                            name="year"
                                                            onChange={this.handleChange}
                                                            noValidate
                                                        />
                                                    </div>
                                                </div>             
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12"><div role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="next-btn">Next <i className="fa fa-angle-right"></i></div></div>
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
                                            <div className="col-xl-11 comments">
                                                <div className="row"> 
                                                    <label htmlFor="comments" id="text-field-title">Comments</label>
                                                </div>                    
                                                <textarea 
                                                    // className={}                                                 
                                                    id="myCommentBox" 
                                                    cols="40" 
                                                    rows="5" 
                                                    name="comments"
                                                    onChange={this.handleChange}
                                                    noValidate
                                                >
                                                </textarea>
                                            </div>                                    
                                            <div className="col-12"> <button id="next-btn" type="submit">Next <i className="fa fa-angle-right"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </form>
            </div>
        </div>
    );
}

}
export default Form
