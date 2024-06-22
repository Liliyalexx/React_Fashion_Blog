import React from 'react';

function Article({ title, date, imgSrc, altText, excerpt }) {
  return (
    <article>
      <h2>{title}</h2>
      <p className='date'>{date}</p>
      <img src={imgSrc} alt={altText} />
      <p>{excerpt}</p>
      <a href='#' className='read-more'>
        Read More
      </a>
    </article>
  );
}

export default Article;
