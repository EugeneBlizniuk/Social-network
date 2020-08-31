import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import style from './Login.module.css';

import { login } from '../../redux/reducer/authReducer';
import { Redirect } from 'react-router-dom';
import { createField, Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} >
            {createField('Login', 'login', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            {createField('Login', 'login', [required], Input, { type: 'checkbox' }, 'remember me')}
            {captchaUrl && <img src={captchaUrl}></img>}
            {captchaUrl && createField('Code from the image', 'captcha', [required], Input)}

            {error && <div className={style.errorSummaryForm}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ isAuthenticated, captchaUrl, login }) => {
    if (isAuthenticated) return <Redirect to={'/profile'} />

    const onSubmit = (formData) => {
        login(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>);
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);