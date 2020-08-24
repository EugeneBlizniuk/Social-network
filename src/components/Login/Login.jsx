import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../redux/reducer/authReducer';
import { Redirect } from 'react-router-dom';

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
    if (props.isAuthenticated) return <Redirect to={'/profile'} />

    const onSubmit = (formData) => {
        const { login, password, rememberMe } = formData;
        props.login(login, password, rememberMe);
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>);
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);