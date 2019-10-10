import React from 'react';
import ReactDOM from 'react-dom';
 
function DataformApp() {
    return (
        <div className="container" id="mycontainer">
            <div className="row justify-content-center">
                <div className="col-md-8" id="mycol">

                <div class="accordion" id="accordionMain">

                    <div class="card" id="my-card">
                        <div class="my-card-header" id="headingOne">
                        <h5 class="mb-0">
                            <div id="card-heading" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Step 1: Your details
                            </div>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionMain">
                        <div class="card-body" id="my-card-body">
                        <form>
                            <div class="row">
                                <div class="col-4">
                                    <label id="text-field-title">First Name</label>
                                    <input id="text-field" type="text" name="firstname"/>
                                </div>
                                <div class="col-4">
                                    <label id="text-field-title">Surname</label>
                                    <input id="text-field" type="text" name="lastname"/>
                                </div>
                               
                            </div>
                         
                            <div class="row">
                                <div class="col-4">
                                    <span id="text-field-title">Email Address</span>
                                    <input id="text-field" type="text" name="email"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12"><button id="next-btn" type="button">Next <i class="fa fa-angle-right"></i></button></div>
                            </div>
                        </form> 
                        </div>
                        </div>
                    </div>

                    <div id="mybreak"></div>

                    <div class="card" id="my-card">
                        <div class="my-card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <div id="card-heading" class="collapsed" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Step 2: More comments
                            </div>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionMain">
                        <div class="card-body" id="my-card-body">
                            Second body
                        </div>
                        </div>
                    </div>

                    <div id="mybreak"></div>

                    <div class="card" id="my-card">
                        <div class="my-card-header" id="headingThree">
                        <h5 class="mb-0">
                            <div id="card-heading" class="collapsed" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Step 3: Final comments
                            </div>
                        </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionMain">
                        <div class="card-body" id="my-card-body">
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

export default DataformApp;

if (document.getElementById('dataformApp')) {
    ReactDOM.render(<DataformApp />, document.getElementById('dataformApp'));
}
