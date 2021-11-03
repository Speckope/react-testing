import React, { useState } from 'react';

interface CommentBoxProps {}

const CommentBox: React.FC<CommentBoxProps> = ({}) => {
  const [comment, setComment] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    e
  ) => {
    e.preventDefault();
    setComment('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
