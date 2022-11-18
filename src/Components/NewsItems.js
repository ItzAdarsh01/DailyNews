import React, { Component } from 'react'
export class NewsItems extends Component {
  render() {
     let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
       <div className="card" >
  <img src={!imageUrl?"https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376__340.jpg":imageUrl} className="card-img-top" alt=" "/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItems