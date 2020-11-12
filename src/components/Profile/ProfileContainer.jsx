import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer"
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }
    render() {
    return <Profile profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => ({profile : state.profilePage.profile});

export default connect(mapStateToProps, {setUserProfile,})(withRouter(ProfileContainer));
