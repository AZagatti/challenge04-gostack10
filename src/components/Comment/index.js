import React from 'react';

import './styles.css';

export default function Comment({ comment }) {
  return (
    <div className='comment-container'>
      <div className='comment-avatar-comment'>
        <div>
          <img
            className='avatar'
            alt={comment.author.name}
            src={comment.author.avatar}
            width={40}
          />
        </div>
        <div className='comment-area'>
          <p className='comment-name'>{comment.author.name}</p>
          <p className='comment-content'>{comment.content}</p>
        </div>
      </div>
      <div className='comment-interactions'>
        <p className='comment-inline-interaction'>Curtir</p> ·
        <p className='comment-inline-interaction'> Responder</p> ·
        <p className='comment-inline-date'> {comment.date}</p>
      </div>
    </div>
  );
}
