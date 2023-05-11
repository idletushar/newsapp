import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
//   static propTypes = {

//   }
    constructor(){
        super();
        this.state = {
           articles: [],
           loading: false
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=18b1ad644e834eb698ea2e7847387adb";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }

// This app is made withnthe help of NewsAPI
  render() {
    return (
      <div className='container my=3'>
        <h1>News4You - Top Headlines</h1>
        <div className='row'>
          {/* with this we can iterate all array items */}
          {/* use element */}
          {/* we can also do this by destructuring */}
          {this.state.articles.map((element)=>{
            // we are returning div so we gave "key" in div
            return <div className="col-md-4" key={element.url}>
                {/* each child should have unique "key" */}
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>       
      </div>
    )
  }
}

export default News