import PropTypes from 'prop-types';

export function withLoadingState(WrappedComponent) {
  function ComponentWithLoadingState({
    isLoading,
    error,
    loadingClassName,
    errorClassName,
    ...rest
  }) {
    if (isLoading) {
      return <p className={loadingClassName}>Loading...</p>;
    }
    if (error) {
      return <div className={errorClassName}>{error}</div>;
    }
    return <WrappedComponent {...rest} />;
  }

  ComponentWithLoadingState.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    loadingClassName: PropTypes.string,
    errorClassName: PropTypes.string,
  };

  ComponentWithLoadingState.displayName = `withLoadingState(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithLoadingState;
}