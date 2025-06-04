// App.jsx
import React from "react";
import BuggyComponent from "./BuggyComponent";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <div className="p-8">
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
