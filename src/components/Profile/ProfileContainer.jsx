import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer"
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
  }
    render() {
    return <Profile profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => ({profile : state.profilePage.profile});

export default connect(mapStateToProps, {getUserProfile,})(withRouter(ProfileContainer));
