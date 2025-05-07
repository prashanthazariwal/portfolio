import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-500 mb-6">
              We're sorry, but something went wrong. Please try refreshing the
              page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === "development" && (
              <details className="text-left bg-gray-100 p-4 rounded-md">
                <summary className="cursor-pointer text-gray-700">
                  Error Details
                </summary>
                <pre className="mt-2 text-sm text-gray-600">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Refresh Page
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
