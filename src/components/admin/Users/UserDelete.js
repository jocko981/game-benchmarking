import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, deleteUser } from "../../../actions";
import history from "../../../history";

import ModalDeleteUser from "../Modals/ModalDeleteUser";

class UserDelete extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
        console.log(this.props.match.params, 'this.props.match.params')
    }

    renderDelete() {
        const { id } = this.props.match.params;
        
        return (
            <>
                <button onClick={() => this.props.deleteUser(id)} className="ui button negative">Delete</button>
                <Link to="/admin/users" className="ui button">Cancel</Link>
            </>
        );
    }

    renderContent() {
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

        return <> Are you sure you want to delete: <b>{this.props.user.name}</b>? </>
    }

    render() {
        return (
            <ModalDeleteUser
                title="Delete User"
                renderContent={this.renderContent()}
                renderDelete={this.renderDelete()}
                onDismiss={() => history.push("/admin/users")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'state')

    return { user: Object.values(state.users)
        .find(item => item.id.toString() === ownProps.match.params.id) };
        
}

export default connect(mapStateToProps, { fetchUser, deleteUser })(UserDelete);