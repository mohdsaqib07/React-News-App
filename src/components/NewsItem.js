import React from 'react'
import  PropTypes  from 'prop-types';

function NewsItem ({title,description,imageurl,newsurl,timestamp,publisher,source,mode}) {

return (
        <div className="card m-2" style={{
            color:`${mode==='light'?'black':'#fff'}`,
            backgroundColor:mode==='light'?'#fff':'black',
            border:'1px solid lightgray',
            }}>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'10'}}> {source} </span>
              <img src={imageurl?imageurl:'https://source.unsplash.com/1600x1000/?news,headlines'} className="card-img-top" alt={`${title.slice(0,11)}...`}  />
                    <div className="card-body">
                        <h3 className="card-title fw-semibold">{title?`${title.slice(0,46)}...`:""}</h3>
                        <p className="card-text">{description?`${description.slice(0,150)}...`:""}</p>
                        <div className='d-flex justify-content-between news-meta'>
                        <p className="card-text"><small></small>Published By: {publisher?publisher:"No Source"} <br/> On: {new Date(timestamp).toDateString()}</p>
                        <a href={newsurl} className="text-danger text-decoration-none" rel='noreferrer' target='_blank' style={{whiteSpace:'nowrap'}}>Read More...</a>
                        </div>
                    </div>
                </div>
            
        )
    
}
NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageurl: PropTypes.string,
    newsurl: PropTypes.string,
}
export default NewsItem
