import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../redux/reducer/authReducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'} />
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={'input'} type={'password'} />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        const { login, password, rememberMe } = formData;
        props.login(login, password, rememberMe);
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>);
}

export default connect(null, { login })(Login);