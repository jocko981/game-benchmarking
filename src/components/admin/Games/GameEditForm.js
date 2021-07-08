
import React from "react";
import { Field, formValues, reduxForm } from "redux-form";


class GameEditForm extends React.Component {
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

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" component={this.renderInput} label="Enter name" />
                <Field name="ID" component={this.renderInput} label="Enter ID" />
                <Field name="num_of_players_favourite" component={this.renderInput} label="Enter num_of_players_favourite" />
                <Field name="price" component={this.renderInput} label="Enter price" />
                <Field name="type" component={this.renderInput} label="Enter type" />
                <Field name="num_of_players_global" component={this.renderInput} label="Enter num_of_players_global" />
                <Field name="rating" component={this.renderInput} label="Enter rating" />
                <Field name="num_of_players_2015" component={this.renderInput} label="Enter num_of_players_2015" />
                <Field name="num_of_players_2016" component={this.renderInput} label="Enter num_of_players_2016" />
                <Field name="num_of_players_2017" component={this.renderInput} label="Enter num_of_players_2017" />
                <Field name="num_of_players_2018" component={this.renderInput} label="Enter num_of_players_2018" />
                <Field name="num_of_players_2019" component={this.renderInput} label="Enter num_of_players_2019" />
                <Field name="num_of_players_2020" component={this.renderInput} label="Enter num_of_players_2020" />
                <Field name="year_published" component={this.renderInput} label="Enter year_published" />
                <Field name="platform" component={this.renderInput} label="Enter platform" />
                <Field name="violence" component={this.renderInput} label="Enter violence" />
                <Field name="won_award" component={this.renderInput} label="Enter won_award" />
                <Field name="single_player" component={this.renderInput} label="Enter single_player" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
    
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title.";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description.";
    }

    return errors;
}


export default reduxForm({ 
    form: "streamForm",
    validate: validate
})(GameEditForm);