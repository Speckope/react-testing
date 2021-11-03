import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface CommentBoxProps {}

const CommentBox: React.FC<CommentBoxProps> = ({}) => {
  const [comment, setComment] = useState('');
  const { saveComment } = useActions();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    e
  ) => {
    e.preventDefault();
    saveComment(comment);
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
