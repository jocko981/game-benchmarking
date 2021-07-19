import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, editUser } from "../../../actions";
import UserForm from "./UserForm";
import Loader from "../../Loaders/Loader";

class UserEditForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
    }
    
    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.editUser(id, formValues);
    };
    

    render() {
        if(!this.props.user) {
            return (
                <Loader />
            );
        }

        return (
            <div className="content-page-wrapper">
                <h3>Edit a User</h3>
                <UserForm
                    initialValues={_.pick(this.props.user, 'name', 'id', 'password', 'role')} 
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return { user: Object.values(state.users)
        .find(item => item.id.toString() === ownProps.match.params.id) };
}

export default connect(mapStateToProps, { fetchUser, editUser })(UserEditForm);