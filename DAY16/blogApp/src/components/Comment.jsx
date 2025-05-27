import React from 'react';

function Comment({ text }) {
  return (
    <div className="ml-4 mt-2 p-2 bg-gray-100 rounded shadow-sm">
      <p>{text}</p>
    </div>
  );
}

export default Comment;
