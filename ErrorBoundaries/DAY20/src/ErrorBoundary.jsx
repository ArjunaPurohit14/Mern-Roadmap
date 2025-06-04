// ErrorBoundary.jsx
import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by error boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      // 🎯 Fallback UI
      return (
        <div className="h-screen flex flex-col items-center justify-center bg-red-100 text-red-700 p-8">
          <h1 className="text-3xl font-bold mb-4">⚠️ Oops! Something went wrong.</h1>
          <p className="text-lg mb-4">The component crashed. Try refreshing the page.</p>
          <img
            src="https://i.imgur.com/QIxIKBH.png"
            alt="Error"
            className="w-48"
          />
        </div>
      );
    }

    return this.props.children;
  }
}
