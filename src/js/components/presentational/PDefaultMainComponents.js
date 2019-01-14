import React from 'react'

function NewsCode (params) {
  const { title, uptitle, lead, id } = params.thenews;
  return (
    <>
      <h5>
        کد خبر :  {id}
      </h5>
      <p className="uptitle" >{uptitle}</p>
      <p className="title" >{title}</p>
      <p className="lead" >{lead}</p>
    </>
  )
}

function MainNewsComp (params) {
  const { title, uptitle, lead, id, content, primaryFile } = params.newsdata;
  return (
    <>
      <h5>
        کد خبر :  {id}
      </h5>
      <p className="uptitle" >{uptitle}</p>
      <p className="title" >{title}</p>
      <div>
        <img src={primaryFile.picture} alt={primaryFile.title} />
        <span>
          {primaryFile.title}
        </span>
      </div>
      <p className="lead" >{lead}</p>
      <p className="content" >{content}</p>
    </>
  )
}

export { NewsCode, MainNewsComp };