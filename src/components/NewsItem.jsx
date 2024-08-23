import React from 'react';
import image from '../assets/images.jpeg';

const NewsItem = ({title,description,url,src}) => {
  return (
    <div className="card bg-dark text-light d-inline-block mb-3 mx-2 my-2 px-2 py-2" style={{width:"300px"}}>
    <img src={src?`${src}`:image} className="card-img-top" style={{width:"280px",height:"160px"}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,20)}</h5>
      <p className="card-text">{description?description.slice(0,50):"Latest news updates with accurate, timely information"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem