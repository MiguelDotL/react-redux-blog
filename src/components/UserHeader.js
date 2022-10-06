import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find(
            (user) => user.id === this.props.userId
        );
        return user ? (
            <div className="header">{user.name}</div>
        ) : (
            <div className="header"></div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
