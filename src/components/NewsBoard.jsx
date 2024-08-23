import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = () => {
    const [Article,setArticle]=useState([]);

    useEffect(()=>{
 
      const url=`https://newsapi.org/v2/everything?q=bitcoin&apiKey=d7334b2f634d4a6b8199e5f6db993fca`;
      fetch(url).then((res)=> res.json()).then((data)=>{setArticle(data.articles)});
    },[])
  return (
    <div>
        <h4 className='text-center'>Latest <span className="badge text-bg-secondary bg-danger">News</span></h4>
        {Article.map((news,index)=> {
            return <NewsItem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage}/>
        } )}
    </div>
    
  )
}

export default NewsBoard