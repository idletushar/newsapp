import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";//using from npmjs


export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 6,
    category: "general",
    title: "Top Headlines" 
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

    constructor(props){
        super(props);
        this.state = {
           articles: [],
           loading: false,
           page: 1,
           totalResults: 0
        }
        document.title= `${this.capitalizeFirstLetter(this.props.category)} - News4You`
    }
    // 18b1ad644e834eb698ea2e7847387adb outlook api

3
    async componentDidMount(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9b3eb2aa3ed4b05ba546ecf295d540d&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false     
      })
    }

      fetchMoreData= async()=>{
        this.setState({page: this.state.page + 1,})
          const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9b3eb2aa3ed4b05ba546ecf295d540d&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles) , 
        totalResults: parsedData.totalResults,
      })

      }


// This app is made withnthe help of NewsAPI
  render() {
    return (
      <div className='container my=3'>
      <h1 className='text-center my-5 display-4'>News4You - {this.props.title}</h1>
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className='row'>
          {/* with this we can iterate all array items */}
          {/* use element */}
          {/* we can also do this by destructuring */}
          {this.state.articles.map((element)=>{
            // we are returning div so we gave "key" in div
            return <div className="col-md-4 my-2" key={element.url}>
                {/* each child should have unique "key" */}
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>     
        </div>
        
        </InfiniteScroll>
      </div>

    )
  }
}

export default News