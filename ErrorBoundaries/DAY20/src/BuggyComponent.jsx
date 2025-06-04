// BuggyComponent.jsx
import React, { useState } from "react";

function BuggyComponent() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Crash!");
  }

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">I am a Buggy Component</h2>
      <button
        onClick={() => setCrash(true)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Crash Me
      </button>
    </div>
  );
}

export default BuggyComponent;
