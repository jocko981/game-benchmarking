import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, editUser } from "../../../actions";
import UserForm from "./UserForm";

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
                <div className="content-page-wrapper">
                    <div className="ui segment">
                        <div className="ui active loader"></div>
                        <br/>
                        <br/>
                    </div>
                </div>
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