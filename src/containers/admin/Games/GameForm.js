
import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class GameForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
            <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);

    }
    
    render() {
        const binarNum = value => value && Number(value) === 0 && Number(value) === 1 ? 'Must be a number 0 or 1' : undefined

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field name="name" component={this.renderInput} label="Enter: name" />
                <Field type="number" name="ID" component={this.renderInput} label="Enter: ID" />
                <Field type="number" name="num_of_players_favourite" component={this.renderInput} label="Enter: num_of_players_favourite" />
                <Field type="number" name="price" component={this.renderInput} label="Enter: price" />
                <Field name="type" component={this.renderInput} label="Enter: type" />
                <Field type="number" name="num_of_players_global" component={this.renderInput} label="Enter: num_of_players_global" />
                <Field type="number" name="rating" component={this.renderInput} label="Enter: rating" />
                <Field type="number" name="num_of_players_2015" component={this.renderInput} label="Enter: num_of_players_2015" />
                <Field type="number" name="num_of_players_2016" component={this.renderInput} label="Enter: num_of_players_2016" />
                <Field type="number" name="num_of_players_2017" component={this.renderInput} label="Enter: num_of_players_2017" />
                <Field type="number" name="num_of_players_2018" component={this.renderInput} label="Enter: num_of_players_2018" />
                <Field type="number" name="num_of_players_2019" component={this.renderInput} label="Enter: num_of_players_2019" />
                <Field type="number" name="num_of_players_2020" component={this.renderInput} label="Enter: num_of_players_2020" />
                <Field type="number" name="year_published" component={this.renderInput} label="Enter: year_published" />
                <Field name="platform" component={this.renderInput} label="Enter: platform" />
                <Field type="number" name="violence" component={this.renderInput} label="Enter: violence" validate={binarNum} />
                {/* normalize={value => value && value.toNumber()}  */}
                <Field type="number" name="won_award" component={this.renderInput} label="Enter: won_award" />
                <Field type="number" name="single_player" component={this.renderInput} label="Enter: single_player" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
    
}

const validate = (formValues) => {
    const errors = {};
    const msg = "You must enter this.";

    if (!formValues.name) {
        errors.name = msg;
    }
    if (!formValues.ID) {
        errors.ID = msg;
    }
    if (!formValues.num_of_players_favourite) {
        errors.num_of_players_favourite = msg;
    }
    if (!formValues.price) {
        errors.price = msg;
    }
    if (!formValues.type) {
        errors.type = msg;
    }
    if (!formValues.num_of_players_global) {
        errors.num_of_players_global = msg;
    }
    if (!formValues.rating) {
        errors.rating = msg;
    }
    if (!formValues.num_of_players_2015) {
        errors.num_of_players_2015 = msg;
    }
    if (!formValues.num_of_players_2016) {
        errors.num_of_players_2016 = msg;
    }
    if (!formValues.num_of_players_2017) {
        errors.num_of_players_2017 = msg;
    }
    if (!formValues.num_of_players_2018) {
        errors.num_of_players_2018 = msg;
    }
    if (!formValues.num_of_players_2019) {
        errors.num_of_players_2019 = msg;
    }
    if (!formValues.num_of_players_2020) {
        errors.num_of_players_2020 = msg;
    }
    if (!formValues.year_published) {
        errors.year_published = msg;
    }
    if (!formValues.platform) {
        errors.platform = msg;
    }
    if (!formValues.violence) {
        errors.violence = msg;
    }
    if (!formValues.won_award) {
        errors.won_award = msg;
    }
    if (!formValues.single_player) {
        errors.single_player = msg;
    }

    return errors;
}


export default reduxForm({ 
    form: "gameForm",
    validate: validate
})(GameForm);