import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    if (password !== confirmPassword) {
      alert("Passwords dont match!");
    } else {
      signUpStart({ displayName, email, password, confirmPassword });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <div className="title">
          <span>Sign up with your email and passsword</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              handleChange={this.handleChange}
              label="Display Name"
              required
            ></FormInput>
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
              label="Email"
              required
            ></FormInput>
            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleChange}
              label="Password"
              required
            ></FormInput>
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={this.handleChange}
              label="Confirm Password"
              required
            ></FormInput>
            <CustomButton type="submit">SIGN UP</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToprops = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToprops)(SignUp);
