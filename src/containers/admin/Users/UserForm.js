
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
    // ideja !  - napravi 2 comp za 2 inputa

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field name="id" type="number" component={this.renderInput} label="Enter: id" />
                <Field name="name" type="text" component={this.renderInput} label="Enter: name" />
                <Field name="password" type="text" component={this.renderInput} label="Enter: password" />

                <div className="field">
                    <label>Select role: </label>

                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field name="role" type="radio" component="input" value="user" id="user" props={{ value: "user" }} />
                            <label htmlFor="user">user</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field name="role" type="radio" component="input" value="admin" id="admin" />
                            <label htmlFor="admin">admin</label>
                        </div>
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

// const warn = values => {
//     const warnings = {}
//     if (values.age < 19) {
//         warnings.age = 'Hmm, you seem a bit young...'
//     }
//     return warnings
// } // we can also add warning

export default reduxForm({
    form: "userForm",
    initialValues: { role: "user" },
    validate: validate,
    // warn : ward // <--- warning function given to redux-form
})(UserForm);