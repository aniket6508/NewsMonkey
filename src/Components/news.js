import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Loader } from './loader';
import PropTypes from 'prop-types';
export class News extends Component {
  articles=[]
  static propTypes={
    category:PropTypes.string,
  };
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }


    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b18905f787d143ca8a5fd9d7e34d3af5&pagesize=9`;
        this.setState({loading:true});
        let data= await fetch(url);
        let pData=await data.json();
        console.log(pData);
        this.setState({articles:pData.articles,totalResult:pData.totalResults,loading:false});
    }
    handelNextClick= async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=b18905f787d143ca8a5fd9d7e34d3af5&pagesize=9&page=${this.state.page+1}`;
      this.setState({loading:true});
        let data= await fetch(url);
        let pData=await data.json();
      this.setState({
        articles:pData.articles,
        page:this.state.page+1,
        loading:false
      })
      console.log(this.state.totalResult);
      console.log(this.state.page);
  }
    handlePrevClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=b18905f787d143ca8a5fd9d7e34d3af5&page=${this.state.page-1}&pagesize=9`;
      this.setState({loading:true})
        let data= await fetch(url);
        let pData=await data.json();
      this.setState({
        articles:pData.articles,
        page:this.state.page-1,
        loading:false
      })
    }
  render() {
    let y=Math.ceil(this.state.totalResult/9);
    let x="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg";
    return (
      <>
      {this.state.loading&&<Loader/>}
      <h2 className="text-3xl font-semibold text-gray-700 text-center p-7">Top-Headlines</h2>
      <div className="flex flex-wrap justify-center">
      {!this.state.loading&&this.state.articles.map((element,i)=>{
        return  <div key={i}>
        <NewsItem title={element.title?element.title.slice(0,44)+"...":x} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} ReadMore={element.url?element.url:""}/>
      </div>
      })}
      </div>
      <div className="flex justify-between my-4 mx-10">
      <button disabled={this.state.page <= 1} className="bg-transparent p-2 border border-black align-middle rounded-lg font-semibold hover:bg-gray-800 hover:text-white" onClick={this.handlePrevClick}> &larr;Previous</button>
      <button disabled={this.state.page===y}className="bg-transparent p-2 border border-black align-middle rounded-lg font-semibold hover:bg-gray-800 hover:text-white" onClick={this.handelNextClick}>Next&rarr;</button>
      </div>
      </>
    )
  }
}

export default News
