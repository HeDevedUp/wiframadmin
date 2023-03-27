import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const CheckLogin = (WrappedComponent) => {
  const WrapperComponent = (props) => {
    const userLoggedIn = useSelector((state) => state.authReducers.Authentication.isLoggedIn);
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!userLoggedIn) {
        navigate('/login');
      }
    }, [userLoggedIn, navigate]);

    return userLoggedIn ? <WrappedComponent {...props} /> : <div>Error: User not authenticated</div>;
  };

  return (
    <ErrorBoundary>
      <WrapperComponent />
    </ErrorBoundary>
  );
};

export default CheckLogin;
