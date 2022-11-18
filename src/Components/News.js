import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
export default class News extends Component { 
  static defaultProps={
    category:'general'
  }
  static propTypes={
  category:PropTypes.string
  }
constructor()
  {
  super()
  console.log("constructor called")
  this.state={
  articles:[],page:1
  }
  }
  async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=973186ebcbeb40b0bb8c8869acce5c68&page=1&pageSize=10`
  let data=await fetch(url) 
  let parsedata= await data.json()
  this.setState({articles:parsedata.articles})
  }
 nextclick= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=973186ebcbeb40b0bb8c8869acce5c68&page=${this.state.page+1}&pageSize=10`
  let data=await fetch(url) 
  let parsedata= await data.json()
  this.setState({
    page:this.state.page+1,
    articles:parsedata.articles})
  }
  prevclick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=973186ebcbeb40b0bb8c8869acce5c68&page=${this.state.page-1}&pageSize=10`
    let data=await fetch(url) 
    let parsedata= await data.json()
    this.setState({
      page:this.state.page-1,
      articles:parsedata.articles})
  }
  render() {
    return (
      <div className='container my-4'>
        <div className='marquee'>
        <h2 > Top headlines from {this.props.category} category:</h2>
        </div>
        
        <div className='row'>
          {this.state.articles.map((ele)=>{
          return <div className='col-md-4 my-3' key={ele.url}>
        <NewsItems title={ele.title?ele.title.slice(0,30):""} description={ele.description?ele.description.slice(0,40):""} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
        </div>  
          })}
        
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-primary" disabled={this.state.page<=1} onClick={this.prevclick}> &larr; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.nextclick}>&rarr;Next</button>
        </div>
      </div>
      
    )
  }
}
