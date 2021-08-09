
import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class UserForm extends React.Component {
    // const { handleSubmit } = this.props;    -Ovo je iz redux-forme, i ima ga u <form>

    // for redux-form
    renderErrorTouched({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderError({ error, submitFailed }) {
          console.log(submitFailed, 'E submitFailed')

        if (submitFailed && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }
    renderWarn({ warning, submitFailed }) {
        if (submitFailed) {
            return (
                <div className="ui yellow compact message">
                    <div className="header">
                        <i className="warning icon" />
                        {warning}
                    </div>
                </div>
            );
        }
    }

    // rendering functions
    renderInput = ({ input, label, meta, type }) => { // (field)  je ovde input, a izvukli smo {input,label,meta,type}
        // console.log(input, 'input', label, 'label', meta, 'meta')
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        //           ${meta.error && meta.submitFailed}  - to render error only after submitting empty input(s)

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }
    renderDropdown = ({ input, meta, label }) => {
        //   console.log('dropDown - { meta }', meta)
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <select {...input}>
                    <option />
                    <option value="ff0000">Red</option>
                    <option value="00ff00">Green</option>
                    <option value="0000ff">Blue</option>
                </select>
                <div>{this.renderWarn(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field name="id" type="number" component={this.renderInput} label="Enter: id" />
                <Field name="name" type="text" component={this.renderInput} label="Enter: name" />
                <Field name="password" type="text" component={this.renderInput} label="Enter: password" />

                <Field name="favoriteColor" component={this.renderDropdown} label="Select a color: " />

                <div className="field">
                    <label>Select role: </label>

                    <div className="field">
                        <div className="ui radio checkbox">
                            <Field name="role" type="radio" component="input" value="user" id="user" />
                            {/* props={{ value: "user" }}   - inside <Field> */}
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
                <div className="ui warning message">
  <i className="close icon"></i>
  <div className="header">
    You must register before you can do that!
  </div>
  Visit our registration page, then try again
</div>

                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// for redux-form
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
    //     radio btn: user/admin role - default is 'user'
    if (!formValues.favoriteColor) {
        errors.favoriteColor = "Where is your color??";
    }
    return errors;
}

const warn = (values) => {
    const warnings = {}

    if (!values.favoriteColor) {
        warnings.favoriteColor = 'Hmm come on, tell us your favorite color...';
    }
    return warnings;
} // we can also add warning

export default reduxForm({
    form: "userForm",
    initialValues: { role: "user" },
    validate: validate,
    warn // <--- warning function given to redux-form
})(UserForm);