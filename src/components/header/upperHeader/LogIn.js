import React from 'react';
import Icon from '../../common/widgets/Icon';

const Login = () => {
    return (
        <div className="login-wrapper custom-border-right">
            <Icon 
                className='fas fa-user-alt'
            />
            <span>
                Login / Register
            </span>
        </div>
    );
}

export default Login;