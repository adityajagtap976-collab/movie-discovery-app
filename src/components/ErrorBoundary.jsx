import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO Task 5: implement getDerivedStateFromError, componentDidCatch, and fallback UI with retry

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
