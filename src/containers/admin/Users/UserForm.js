
import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class UserForm extends React.Component {
    // const { handleSubmit } = this.props;    -Ovo je iz redux-forme, i ima ga u <form>

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta, type }) => { // (field)  je ovde input, a izvukli smo {input,label,meta,type}
        // console.log(input, 'input', label, 'label', meta, 'meta')

        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>

        );
    }
    renderInputRadio = ({ input, label, meta, type }) => { // (field)  je ovde input, a izvukli smo {input,label,meta,type}
        console.log(input, 'input')

        return (
            <div className="field">
                <label>{label}</label>


                <div className="field">

                    <div className="ui radio checkbox">

                        <label htmlFor="admin"><input name="role" type={type} id="admin" value="admin" />admin</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">

                        <label htmlFor="user"><input name="role" type={type} id="user" value="user" defaultChecked />user</label>
                    </div>
                </div>

            </div>
        );
    }

    onSubmit = (formValues) => {
        console.log(formValues, 'form values')
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field type="number" name="id" component={this.renderInput} label="Enter: id" />
                <Field name="name" component={this.renderInput} label="Enter: name" />
                <Field name="password" component={this.renderInput} label="Enter: password" />

                <div className="field">
                    <label>Select role: </label>

                    <div className="field">
                        <label><Field name="role" type="radio"  component="input" value="user" />user</label>
                    </div>
                    <div className="field">
                        <label><Field name="role" type="radio"  component="input" value="admin" />admin</label>
                    </div>
                    
                {/* <Field name="role" type="radio" component={this.renderInputRadio} /> */}
                </div>
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