import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'} />
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={'input'} />
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

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>);
}

export default Login;