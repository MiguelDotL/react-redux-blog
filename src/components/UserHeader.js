import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

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

export default connect(mapStateToProps, { fetchUser })(UserHeader);
