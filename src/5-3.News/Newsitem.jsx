import React from 'react'

const Newsitem = ({article}) => {

  const {author, source, title, url, urlToImage, publishedAt} =  article
  return (
    <div className='newsitem'>
      <h2>${title} <span>${publishedAt}</span></h2>
      <p>{source.name}</p>
      <p>{author}</p>
      <figure>
        <a href={url}>
        <img src={urlToImage} alt={title} />
        </a>
      </figure>

    </div>
  )
}

export default Newsitem
