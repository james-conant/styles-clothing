import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

import anError from "../../assets/error.png";

class ErrorBoundry extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={anError} />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
