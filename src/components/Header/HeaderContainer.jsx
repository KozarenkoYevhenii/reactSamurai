import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import axios from "axios";

class HeaderComponent extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          const { id, login, email } = res.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login });

export default connect(mapStateToProps, { setAuthUserData })(HeaderComponent);
