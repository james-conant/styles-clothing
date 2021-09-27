import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { Container, SignInLink, LogInSVG, LogOutSVG } from "./user-icon.styles";

const UserIcon = ({ currentUser, signOutStart }) => {
  return (
    <Container>
      {currentUser !== null ? (
        <SignInLink as="div" onClick={signOutStart}>
          <LogOutSVG />
        </SignInLink>
      ) : (
        <SignInLink to="/signin">
          <LogInSVG />
        </SignInLink>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
