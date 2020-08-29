import React from 'react';
import { Field } from 'redux-form';
import style from "./FormsControls.module.css";

const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                { children }
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

//above methods are just for some kind of validation

export const createField = (placeholder, name, validators, component, props = {}, text="") => {
    return (
        <div>
            <Field 
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            /> {text}
        </div>
    );
}