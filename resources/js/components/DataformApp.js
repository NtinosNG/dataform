import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import { BrowserRouter } from 'react-router-dom';

class DataformApp extends Component {
    render() {
        return (
            <BrowserRouter>           
                <Form />
            </BrowserRouter>
        );
    }
}


if (document.getElementById('dataformApp')) {
    ReactDOM.render(<DataformApp />, document.getElementById('dataformApp'));
}
