import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../../actions";

class UserList extends React.Component {
    componentDidMount() {
        // fetch users Here !! (redux action call)
        this.props.fetchAllUsers();
    }
    
    renderAdminEdit(user) {
        return (
            <div className="right floated content">

                <Link to={`/admin/users/edit/${user.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/admin/users/delete/${user.id}`} className="ui button negative">
                    Delete
                </Link>
                
            </div>
        );
    }

    renderUserList() {
        return this.props.users.map(user => {
            return (
                <div className="item" key={user.id}>

                    {this.renderAdminEdit(user)}

                    <i className="large middle aligned icon user" />

                    <div className="content">

                        <Link to={`/admin/users/${user.id}`} className="header">{user.name}</Link>

                        <div className="description">
                            id: {user.id}
                        </div>
                    </div>
                    
                </div>
            );
        })
    }

    renderCreateUser() {
        return (
            <div>
                <Link to="/admin/users/new" className="ui button primary">
                    Add New User
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className="content-page-wrapper">
                <h1>Users</h1>

                <div className="ui celled list">
                    {this.renderUserList()}
                </div>
                {/* OVO moze da se prebaci na Admin SideBar - Add Game Btn */}
                {this.renderCreateUser()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state, '[mapStateToProps]')
    return { 
        users: Object.values(state.users),
        // currentUserId: state.auth.userId,
        // isSignedIn: state.auth.isSignedIn 
    };
};

export default connect(mapStateToProps, { fetchAllUsers })(UserList);