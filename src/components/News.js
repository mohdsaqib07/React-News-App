import React, { useState,useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

import InfiniteScroll from "react-infinite-scroll-component";


export default function News (props) {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setpage] = useState(1)
    const [totalResults,setResults] = useState(0)

    useEffect(()=>{
        document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1,)
        setTimeout(function(){
            document.title = 'JetSetJournals.com - Get Daily News for free'
        },2000)
        fetchdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[props.category])
    
    const fetchdata = async () => {
        try{

            props.setProgress(10)
       
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
            let response = await fetch(url)
            props.setProgress(30)
            let data=await response.json()
            props.setProgress(60)
            setArticles(data.articles)
            setResults(data.totalResults)
            setLoading(false)
  
            props.setProgress(100)
        }
        catch(err){
            console.log(err.name)
        }
     }

    




    const fetchMoreData=async ()=>{
        setLoading(true)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
        setpage(page + 1 )
        try{

        
             let response = await fetch(url)
             let data=await response.json()
        
             setArticles(articles.concat(data.articles))
             setLoading(false)
             
        }
        catch(err){
            console.log(err.name)
        }
         
    };
        // render is a lifecycle method of a class based component

        
        // render():
        // This method is responsible for rendering the component's UI elements.
        // It should be a pure function, meaning it should not modify state or interact with the DOM directly.
        return (
                <>             
                <div className="container" style={{marginTop:'10vh'}}>   
                <h1 className='fs-1 fw-lighter text-end' style={{color:'blueviolet'}}>JetSetJournal.com Top-Headlines</h1>
                <h2 className='text-capitalize fs-2 fw-light'>{props.category}</h2>
                </div>
                {loading && <Spinner />}
                    <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner />}
                    >
                   
                 <div className="container">       
                {<div className='row mt-4'>
                    {articles.map((article)=>{
                    return <div className='col-md-4' key={article.url}>
                        <NewsItem title={article.title} description={article.description} imageurl={article.urlToImage} newsurl={article.url} timestamp={article.publishedAt} publisher={article.author} source={article.source.name} mode={props.mode} />
                    </div>
                    
                    })}
                </div>}
                </div>
                </InfiniteScroll>
     
                </>

           
        )
  
}