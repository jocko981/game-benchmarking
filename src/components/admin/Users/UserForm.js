
import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class UserForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
            <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
            
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field name="id" component={this.renderInput} label="Enter: id" />
                <Field name="name" component={this.renderInput} label="Enter: name" />
                <Field name="password" component={this.renderInput} label="Enter: password" />
                <Field name="role" component={this.renderInput} label="Enter role: if it is admin account type 'admin', if it is user leave it blank" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
    
}

const validate = (formValues) => {
    const errors = {};
    const msg = "You must enter this.";

    if (!formValues.id) {
        errors.id = msg;
    }
    if (!formValues.name) {
        errors.name = msg;
    }
    if (!formValues.password) {
        errors.password = msg;
    }
    // if (!formValues.role) {
    //     errors.role = msg;
    // }
    // ovo je conditional, admin accout ima 'role' a kod obicnog usera ne postoji 'role' keyvalue uopste

    return errors;
}


export default reduxForm({ 
    form: "userForm",
    validate: validate
})(UserForm);