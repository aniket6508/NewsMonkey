import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,ReadMore}=this.props;
    return (
      <div className=" max-w-sm my-5 shadow-lg mx-10 rounded-2xl overflow-hidden text-center p-2 transition delay-150 hover:translate-y-2">
        <img src={imageUrl} className="w-full h-48" alt='News'></img>
      <div className="p-3">
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-gray-800 p-3">{description}</p>
      <a href={ReadMore}><button className="bg-transparent p-2 border border-black align-middle rounded-lg font-semibold hover:bg-gray-800 hover:text-white">View Article</button></a>
      </div>
    )
  }
}

export default NewsItem
