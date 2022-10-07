import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
    render() {
        const { user } = this.props;

        return user ? (
            <div className="header">{user.name}</div>
        ) : (
            <div className="header"></div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find((user) => user.id === ownProps.userId);
    return { user };
};

export default connect(mapStateToProps)(UserHeader);
