import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

    if(isLoggedIn) {
        return(
            <div className = 'jumbotron text-center'>
                <h3>This page is secret page ^_^</h3>
                <h4>Предложения о работе можно отправлять по этой почте peter.tolkachev@gmail.com</h4>
            </div>
        );
    }
    return <Redirect to='/login'/>
}

export default SecretPage;
