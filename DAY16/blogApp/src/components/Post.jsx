import React, { useState } from 'react';
import Comment from './Comment.jsx';

function Post({ title, content }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  const handleComment = () => {
    if (comment.trim() === '') {
      setError('Comment cannot be empty');
      return;
    }
    setComments([...comments, comment]);
    setComment('');
    setError('');
  };

  return (
    <div className="border p-4 rounded shadow bg-white mt-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{content}</p>

      <input
        type="text"
        placeholder="Add comment"
        className="border p-1 mt-2"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleComment} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">Post</button>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {comments.map((cmt, index) => (
        <Comment key={index} text={cmt} />
      ))}
    </div>
  );
}

export default Post;
