import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../actions";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import ErrorPage404 from "../../../components/ErrorPages/ErrorPage404";

class UserShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
    }

    render() {
      // this.props.user = undefined, !this.props.user = true
        if(!this.props.user) {
            return (
              <ErrorPage404 />
            );
            // <div className="content-page-wrapper">User not found...</div>
        }

        const { id, name, role } = this.props.user;
        console.log(id, 'id from user')

        console.log(this.props.user, 'user')
        return (
            <div className="content-page-wrapper">
              <SidebarAdmin />
                <table className="ui unstackable table">
                  <thead>
                    <tr>
                      <th>User info</th>
                      <th></th>
                    </tr>
                  </thead>

                <tbody>
                    <tr>
                      <td>id:</td>
                      <td>{id}</td>
                    </tr>
                    
                    <tr>
                      <td>name:</td>
                      <td>{name}</td>
                    </tr>

                    <tr>
                      <td>role:</td>
                      <td>{role}</td>
                    </tr>

                  </tbody>
                </table>
                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps')

    return { user: Object.values(state.users)
      .find(item => item.id.toString() === ownProps.match.params.id) };
}

export default connect(mapStateToProps, { fetchUser })(UserShow);