import React from 'react';

import Comment from '../Comment';

import './styles.css';

export default function Post({ data }) {
  return (
    <div className='post-card'>
      <div className='post-area'>
        <div className='post-author-area'>
          <img className='avatar' src={data.author.avatar} width={40} />
          <div>
            <p className='post-author-name'>{data.author.name}</p>
            <span className='post-date'>{data.date}</span>
          </div>
        </div>
        <p className='post-content'>{data.content}</p>
      </div>
      {data.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}
