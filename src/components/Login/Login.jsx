import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import style from './Login.module.css';

import { login } from '../../redux/reducer/authReducer';
import { Redirect } from 'react-router-dom';
import { createField, Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} >
            {createField('Login', 'login', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            {createField('Login', 'login', [required], Input, { type: 'checkbox' }, 'remember me')}
            {error && <div className={style.errorSummaryForm}>{error}</div>}
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
        props.login(formData.login, formData.password, formData.rememberMe);
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