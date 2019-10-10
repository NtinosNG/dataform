import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class DataformApp extends Component {

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
                        <form>
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
                                    <span id="text-field-title">Email Address</span>
                                    <input id="text-field" type="text" name="email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12"><button id="next-btn" type="button">Next <i className="fa fa-angle-right"></i></button></div>
                            </div>
                        </form> 
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
                        Second Body
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
                           Third body
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


if (document.getElementById('dataformApp')) {
    ReactDOM.render(<DataformApp />, document.getElementById('dataformApp'));
}
