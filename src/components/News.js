import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
 
  capitalise=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

constructor(props){
    super(props);
    this.state={
    articles:[],
      loading:false,
      page:1
    }
document.title=`${this.capitalise(this.props.category)} - News 24 `;
  }

  async updateNews(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d082fc03f2314e08990249b15a77e668&page=${this.state.page}&pageSize=${this.props.pagesize}`;
   // this.setState({loading:true});
    let data= await fetch(url);
    this.props.setProgress(30);
    let parseddata=await data.json();
    this.props.setProgress(60);
  this.setState({articles:parseddata.articles,
  totalResults:parseddata.totalResults,
  loading:false});
  this.props.setProgress(100);

  }

async componentDidMount(){

  this.updateNews();
}
handlePreviousClick=async()=>{
 
  

  
this.setState({ page:this.state.page-1 });
this.updateNews();
}
handleNextClick=async()=>{
  
  this.setState({ page:this.state.page+1 });
this.updateNews();




}
fetchMoreData = async() => {
  
  this.setState({ page:this.state.page+1 });
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d082fc03f2314e08990249b15a77e668&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  
  let data= await fetch(url);
  let parseddata=await data.json();

this.setState({articles:this.state.articles.concat(parseddata.articles),
totalResults:parseddata.totalResults,
loading:false});
};

  render() {
    return (
      
<>
        <h1 className='text-center' style={{margin:'35px 0px'}}>News 24 - Top {this.capitalise(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<=this.state.totalResults}
          loader={<h4><Spinner/></h4>}
        >
       <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
          return element.title!=="[Removed]"? <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,45):"PM lights 'Ram Jyoti' after Ayodhya Ram Templ"} Author={element.author} date={element.publishedAt} description={element.description?element.description.slice(0,88):"Prime Minister Narendra Modi has urged citizens to light the ‘Ram Jyoti’ on the auspicio"} imageUrl={element.urlToImage} newsurl={element.url}/>
          </div>:<div className="col-md-4" key={element.url} >
          <NewsItem  title="Let’s talk about it’: EU’s Borrell presses I" Author="Anubhav Garg" date="05-Dec 2023 9:00:00 AM" description="EU foreign policy chief says Israel’s plan to destroy Hamas in Gaza is not working as bl" imageUrl="https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-06T130137Z_692447517_RC2DC5ASIX31_RTRMADP_3_ISRAEL-PALESTINIANS-LEBANON-EU-1704547581.jpg?resize=1920%2C1440" newsurl="https://www.aljazeera.com/news/2024/1/22/lets-talk-about-it-eus-borrell-presses-israel-on-two-state-solution"/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        

           {/*<div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize) } type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

      </div>*/}
      
            
            
            
       
        

            
      


      </>
    )
  }
}

export default News
