import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

    if(isLoggedIn) {
        return(
            <div className = 'jumbotron text-center'>
                <h3>This page is secret page ^_^</h3>
                <h4>Job offers can be sent to this mail: peter.tolkachev@gmail.com</h4>
            </div>
        );
    }
    return <Redirect to='/login'/>
}

export default SecretPage;
