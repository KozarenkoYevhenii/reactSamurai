import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer"

class ProfileContainer extends React.Component {
    componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }
    render() {
    return <Profile profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => ({profile : state.profilePage.profile});

export default connect(mapStateToProps, {setUserProfile,})(ProfileContainer);
