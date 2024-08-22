import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsurl,Author,date}=this.props;
    return (
      <div className='my-3'>
       <div className="card" >
  <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/01/22/1600x900/Modi_1705931502247_1705931509975.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}</p>
   <p className="card-text"><small className="text muted">By {Author?Author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
